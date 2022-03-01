from rest_framework import serializers
from .models import Bug

class BugSerializer(serializers.ModelSerializer):
    class Meta:
        model = Bug
        fields = ('id', 'technology', 'status', 'description', 'error', 'links', 'timestamp')