from django.urls import path
from .views import BugViewAdd, GetBugList

urlpatterns = [
    path('bug-add', BugViewAdd.as_view()),
    path('bug-list', GetBugList.as_view()),
]