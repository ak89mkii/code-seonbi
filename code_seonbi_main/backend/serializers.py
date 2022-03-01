from rest_framework import serializers
from .models import Bug

class BugSerializer(serializers.ModelSerializer):
    class Meta:
        model = Bug
        fields = ('id', 'project', 'technology', 'status', 'description', 'error', 'links', 'solution','timestamp')