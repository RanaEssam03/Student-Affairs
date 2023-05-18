from django.http import HttpResponse
from django.template import loader
from .models import Member


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

def searchResults(request):
  template = loader.get_template('searchResults.html')
  return HttpResponse(template.render())
  
  

