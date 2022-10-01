from django.contrib import admin
from .models import Bug, Command

# Register your models here.
admin.site.register(Bug)
admin.site.register(Command)