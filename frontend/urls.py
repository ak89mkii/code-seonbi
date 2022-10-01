from django.urls import path, include
from .views import index

urlpatterns = [
    path('', index),
    path('bug', index),
    path('bug_add', index),
    path('django', index),
    path('command_add', index)
]