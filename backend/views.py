from django.shortcuts import render
from rest_framework import generics
from .serializers import BugSerializer, CommandSerializer, UserSerializer
from .models import Bug, Command
from django.contrib.auth.models import User
from rest_framework import permissions
from rest_framework.authentication import SessionAuthentication, BasicAuthentication
from rest_framework.response import Response


# Create your views here.

# Bug Class:
# POST requests only.
class CreateBugItem(generics.CreateAPIView):
    queryset = Bug.objects.all()
    serializer_class = BugSerializer
    permission_classes = [permissions.IsAuthenticatedOrReadOnly]

# GET requests only.
class GetBugAll(generics.ListAPIView):
    queryset = Bug.objects.all()
    serializer_class = BugSerializer
    
# DELETE requests only.
class DeleteBugItem(generics.DestroyAPIView):
    queryset = Bug.objects.all()
    serializer_class = BugSerializer
    permission_classes = [permissions.IsAuthenticatedOrReadOnly]


# Command Class:
# POST requests only.
class CreateCommandItem(generics.CreateAPIView):
    queryset = Command.objects.all()
    serializer_class = CommandSerializer
    permission_classes = [permissions.IsAuthenticatedOrReadOnly]
    # authentication_classes = [SessionAuthentication, BasicAuthentication]

    def perform_create(self, serializer):
        serializer.save(owner=self.request.user)

# GET requests only.
class GetCommandAll(generics.ListAPIView):
    queryset = Command.objects.all()
    serializer_class = CommandSerializer

# DELETE requests only.
class DeleteCommandItem(generics.DestroyAPIView):
    queryset = Command.objects.all()
    serializer_class = CommandSerializer
    permission_classes = [permissions.IsAuthenticatedOrReadOnly]


# User Class:
# GET requests only.
class GetUserAll(generics.ListAPIView):
    queryset = User.objects.all()
    serializer_class = UserSerializer

# GET requests only.
class GetUserCurent(generics.ListAPIView):
   def get(self, request):
        serializer = UserSerializer(request.user)
        return Response(serializer.data)