from rest_framework import serializers
from .models import Bug, Command

class BugSerializer(serializers.ModelSerializer):
    class Meta:
        model = Bug
        fields = ('id', 'project', 'technology', 'status', 'description', 'error', 'links', 'solution', 'notes', 'timestamp')


class CommandSerializer(serializers.ModelSerializer):
    class Meta:
        model = Command
        fields = ('id', 'technology', 'description', 'type', 'command', 'notes', 'timestamp')