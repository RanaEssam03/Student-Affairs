from django.http import HttpResponse
from django.template import loader
from .models import Member
from django.views.decorators.csrf import csrf_exempt
from django.db import IntegrityError
from django.shortcuts import render, redirect


def allstudents(request):
  mymember = Member.objects.all()
  template = loader.get_template('view_student_screen.html')
  context = {
    'students': mymember, 
  }
  if request.POST.get('id')  != None:
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
  if request.GET.get('first_name')  != None:
    if(request.GET.get('delete') == "1"):
      mymember.delete()
      return redirect(allstudents)
    
    first_name = request.GET.get('first_name')
    last_name = request.GET.get("last_name")
    id = request.GET.get("id")
    email = request.GET.get("email")
    phone = request.GET.get("phone")
    gpa = request.GET.get("gpa")
    level = request.GET.get("level")
    birthdate = request.GET.get("birthdate")
    state = request.GET.get("state")
    
    mymember.firstname = first_name
    mymember.lastname = last_name
    mymember.email = email
    mymember.phone = phone
    mymember.level = level
    mymember.state = state
    mymember.birthdate = birthdate
    mymember.gpa = gpa
    
    mymember.save() 
    return redirect(allstudents)
  
  return HttpResponse(template.render(context, request))

#############################################################

def main(request):
  template = loader.get_template('main_screen.html')
  return HttpResponse(template.render())

#############################################################

def home(request):
  template = loader.get_template('Home_page.html')
  return HttpResponse(template.render())
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

