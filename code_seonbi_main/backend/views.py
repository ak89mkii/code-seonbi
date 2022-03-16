from django.shortcuts import render
from rest_framework import generics
from .serializers import BugSerializer
from .models import Bug

# Create your views here.

# POST requests allowed.
class CreateBugItem(generics.CreateAPIView):
    queryset = Bug.objects.all()
    serializer_class = BugSerializer

# GET requests only.
class GetBugAll(generics.ListAPIView):
    queryset = Bug.objects.all()
    serializer_class = BugSerializer