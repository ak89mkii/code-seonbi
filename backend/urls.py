from django.urls import path
from .views import CreateBugItem, GetBugAll, DeleteBugItem, CreateCommandItem, GetCommandAll, DeleteCommandItem, GetUserAll, GetUserCurent

urlpatterns = [
    # Bug:
    path('bug-add', CreateBugItem.as_view()),
    path('bug-list', GetBugAll.as_view()),
    # <int:pk> requires id of item in db.
    path('bug-delete/<int:pk>', DeleteBugItem.as_view()),

    # Command:
    path('command-add', CreateCommandItem.as_view()),
    path('command-list', GetCommandAll.as_view()),
    # <int:pk> requires id of item in db.
    path('command-delete/<int:pk>', DeleteCommandItem.as_view()),

    # User:
    path('user-list', GetUserAll.as_view()),
    path('user-logged_in', GetUserCurent.as_view()),
]