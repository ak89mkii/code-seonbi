from django.urls import path
from .views import BugView, GetBugList

urlpatterns = [
    path('bug-add', BugView.as_view()),
    path('bug-list', GetBugList.as_view()),
]