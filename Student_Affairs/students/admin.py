from django.contrib import admin
from .models import Member
from .models import Announcement

# Register your models here.
admin.site.register(Member)
admin.site.register(Announcement)
