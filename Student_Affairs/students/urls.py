from django.urls import path
from . import views


urlpatterns = [
    path('', views.main, name='main'),
    path('studentInfo/<int:id>', views.studentInfo, name='studentInfo'),
    path('editStudent/<int:id>', views.editStudent, name='editStudent'),
    path('delete/<int:id>', views.delete, name='delete'),
    path('home/' or 'home/home', views.home, name='home'),
    path('allstudents/', views.allstudents, name='allstudents'), 
    path('searchResults/', views.searchResults, name= 'searchResults'),
    path('search/', views.search, name= 'search'), 
    path('add/', views.addStudent, name = "addStudent"), 
]
