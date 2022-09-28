from django.urls import path
from .views import CreateBugItem, GetBugAll, DeleteBugItem

urlpatterns = [
    path('bug-add', CreateBugItem.as_view()),
    path('bug-list', GetBugAll.as_view()),
    # <int:pk> requires id of item in db.
    path('bug-delete/<int:pk>', DeleteBugItem.as_view()),
]