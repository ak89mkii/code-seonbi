from django.urls import path, include
from .views import index

urlpatterns = [
    path('', index),
    path('bug', index),
    path('bug_add', index),
    path('cli_bash', index),
    path('cli_zsh', index),
    path('django', index),
    path('cli_ps', index),
    path('link', index),
    path('command_add', index)
]