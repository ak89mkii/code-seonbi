from django.urls import path
from .views import CreateBugItem, GetBugAll

urlpatterns = [
    path('bug-add', CreateBugItem.as_view()),
    path('bug-list', GetBugAll.as_view()),
]