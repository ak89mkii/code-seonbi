from django.shortcuts import render
from rest_framework import generics
from .serializers import BugSerializer, CommandSerializer, UserSerializer
from .models import Bug, Command
from django.contrib.auth.models import User

# Create your views here.

# Bug Class:
# POST requests only.
class CreateBugItem(generics.CreateAPIView):
    queryset = Bug.objects.all()
    serializer_class = BugSerializer

# GET requests only.
class GetBugAll(generics.ListAPIView):
    queryset = Bug.objects.all()
    serializer_class = BugSerializer

# DELETE requests only.
class DeleteBugItem(generics.DestroyAPIView):
    queryset = Bug.objects.all()
    serializer_class = BugSerializer


# Command Class:
# POST requests only.
class CreateCommandItem(generics.CreateAPIView):
    queryset = Command.objects.all()
    serializer_class = CommandSerializer

# GET requests only.
class GetCommandAll(generics.ListAPIView):
    queryset = Command.objects.all()
    serializer_class = CommandSerializer

# DELETE requests only.
class DeleteCommandItem(generics.DestroyAPIView):
    queryset = Command.objects.all()
    serializer_class = CommandSerializer


# User Class:
# POST requests only.
class CreateUserItem(generics.CreateAPIView):
    queryset = User.objects.all()
    serializer_class = UserSerializer