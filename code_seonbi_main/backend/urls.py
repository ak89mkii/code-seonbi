from django.urls import path
from .views import BugView

urlpatterns = [
    path('home', BugView.as_view()),
]