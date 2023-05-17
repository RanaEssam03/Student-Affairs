from django.urls import path
from . import views


urlpatterns = [
    path('', views.main, name='main'),
    path('allstudents/studentInfo/<int:id>', views.studentInfo, name='studentInfo'),
    path('allstudents/editStudent/<int:id>', views.editStudent, name='editStudent'),
    path('home/', views.home, name='home'),
    path('allstudents/', views.allstudents, name='allstudents'), 
]
