from django.http import HttpResponse
from django.template import loader
from .models import Member
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
    # return redirect(allstudents)
  
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

def searchResults(request):
  template = loader.get_template('searchResults.html')
  return HttpResponse(template.render())
#############################################################

def search(request):
  template = loader.get_template('search.html')
  return HttpResponse(template.render())
#############################################################

def addStudent(request):
  template = loader.get_template('add_student_screen.html')
  return HttpResponse(template.render())
  
  

