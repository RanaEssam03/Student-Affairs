from django.http import HttpResponse
from django.template import loader
from .models import Member
from django.shortcuts import render
from django.views.decorators.csrf import csrf_exempt

def allstudents(request):
  mymember = Member.objects.all()
  template = loader.get_template('view_student_screen.html')
  context = {
    'students': mymember, 
  }
  return HttpResponse(template.render(context, request))

def studentInfo(request, id):
  mymember = Member.objects.get(id = id)
  template = loader.get_template('student_info.html')
  context = {
    'std': mymember, 
  }
  return HttpResponse(template.render(context, request))

def editStudent(request, id):
  mymember = Member.objects.get(id = id)
  template = loader.get_template('update_info_screen.html')
  context = {
    'std': mymember, 
  }
  return HttpResponse(template.render(context, request))

def main(request):
  template = loader.get_template('main_screen.html')
  return HttpResponse(template.render())


def home(request):
  template = loader.get_template('Home_page.html')
  return HttpResponse(template.render())

def search(request):
  template = loader.get_template('search.html')
  return HttpResponse(template.render())

def addStudent(request):
  template = loader.get_template('add_student_screen.html')
  return HttpResponse(template.render())
  
@csrf_exempt  
def searchResults(request):
  value = request.POST.get('q', None)
  students = Member.objects.all()
  students = students.filter(firstname__icontains=value).filter(state=0)  | students.filter(lastname__icontains=value).filter(state=0)
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
  return departmentAssignment(request, id)

