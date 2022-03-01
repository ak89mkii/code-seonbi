from django.shortcuts import render
from rest_framework import generics
from .serializers import BugSerializer
from .models import Bug

# Create your views here.

class BugView(generics.CreateAPIView):
    queryset = Bug.objects.all()
    serializer_class = BugSerializer