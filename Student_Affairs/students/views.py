from django.http import HttpResponse
from django.template import loader
from .models import Member
from .models import Announcement
from django.views.decorators.csrf import csrf_exempt
from django.db import IntegrityError
from django.shortcuts import render, redirect
from django.http import JsonResponse
# from .fomrs import stateForm


def allstudents(request):
  
  mymember = Member.objects.all()
  template = loader.get_template('view_student_screen.html')
  context = {
    'students': mymember, 
  }

  
  if request.POST.get('id') is not None:
    id = request.POST.get('id')
    std = Member.objects.get(id= id)
    
    if( request.POST.get('state') == '1'):
      std.state = True
    else:
      std.state = False
    std.save()
    
  
  return HttpResponse(template.render(context, request))


#############################################################

def studentInfo(request, id):
  mymember = Member.objects.get(id = id)
  template = loader.get_template('student_info.html')
  context = {
    'std': mymember, 
  }
  return HttpResponse(template.render(context, request))



#############################################################
def editStudent(request, id):
  
  mymember = Member.objects.get(id = id)
  template = loader.get_template('update_info_screen.html')
  context = {
    'std': mymember, 
  }
  if request.POST.get('first_name')  != None:
    if(request.POST.get('delete') == "1"):
      mymember.delete()
      return redirect(allstudents)
    
    first_name = request.POST.get('first_name')
    last_name = request.POST.get("last_name")
    id = request.POST.get("id")
    email = request.POST.get("email")
    phone = request.POST.get("phone")
    gpa = request.POST.get("gpa")
    level = request.POST.get("level")
    birthdate = request.POST.get("birthdate")
    
    mymember.firstname = first_name
    mymember.lastname = last_name
    mymember.email = email
    mymember.phone = phone
    mymember.level = level
    mymember.birthdate = birthdate
    mymember.gpa = gpa
    
    mymember.save() 
    return HttpResponse(template.render(context, request))
  
  return HttpResponse(template.render(context, request))

#############################################################

def main(request):
  template = loader.get_template('main_screen.html')
  return HttpResponse(template.render())

#############################################################

def home(request):
  template = loader.get_template('Home_page.html')
  context= {
    'announcements': Announcement.objects.all(), 
  }
  return HttpResponse(template.render(context, request))
#############################################################

def search(request):
  template = loader.get_template('search.html')
  return HttpResponse(template.render())
#############################################################

@csrf_exempt  
def addStudent(request):
  template = loader.get_template('add_student_screen.html')
  if(request.GET.get("first_name") != None):
    firstName = request.GET.get("first_name")
    lastName = request.GET.get("last_name")
    gpa = request.GET.get("gpa")
    email = request.GET.get("email")
    phone = request.GET.get("phone")
    level = request.GET.get("level")
    birthdate = request.GET.get("birthdate")
    gender = request.GET.get("gender")
    state = False
    std =  Member(firstname= firstName , lastname = lastName, gpa = gpa , email = email, phone = phone , level = level , birthdate = birthdate , gender = gender , dep = "General" , state =False) 
    std.save()
    return redirect(addStudent) 
  return HttpResponse(template.render())

############################################################






  
@csrf_exempt  
def searchResults(request):
  value = request.POST.get('q', None)
  students = Member.objects.all()
  students = students.filter(firstname__icontains=value).filter(state=1)  | students.filter(lastname__icontains=value).filter(state=1)
  context = {
      'students' : students,
      'value' : value
  }
  return render (request, 'searchResults.html', context)

def departmentAssignment(request, id):
    mymember = Member.objects.get(id = id)
    context = {
      'student' : mymember,
    }
    return render (request, 'departmentAssignment.html', context)

def updateDep(request, id, val):
  students = Member.objects.all()
  students = students.filter(id=id).filter(level=3).update(dep=val)
  return redirect(search)


def updateState(request):
  print('here3')
  if request.GET.get('id') :
    print('herrre')
    id = request.GET.get('id')
    std = Member.objects.get(id= id)
    
    if( request.GET.get('state') == '1'):
      std.state = True
    else:
      std.state = False
    std.save()
    JsonResponse("hereee Done")
    
    

