from django.shortcuts import render
from rest_framework import generics
from .serializers import BugSerializer
from .models import Bug

# Create your views here.

# GET and POST requests allowed.
class BugViewAdd(generics.ListCreateAPIView):
    queryset = Bug.objects.all()
    serializer_class = BugSerializer

# GET requests only.
class GetBugList(generics.ListAPIView):
    queryset = Bug.objects.all()
    serializer_class = BugSerializer