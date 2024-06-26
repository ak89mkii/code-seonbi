from rest_framework import serializers
from .models import Bug, Command
from django.contrib.auth.models import User

class BugSerializer(serializers.ModelSerializer):
    class Meta:
        model = Bug
        fields = ('id', 'project', 'technology', 'status', 'description', 'error', 'links', 'solution', 'notes', 'timestamp')


class CommandSerializer(serializers.ModelSerializer):
    class Meta:
        model = Command
        fields = ('id', 'technology', 'description', 'type', 'command', 'notes', 'timestamp', 'owner')

class UserSerializer(serializers.ModelSerializer):
    commands = serializers.PrimaryKeyRelatedField(many=True, queryset=Command.objects.all())
    owner = serializers.ReadOnlyField(source='owner.username')
    class Meta:
        model = User
        fields = ('id', 'username', 'commands', 'owner')  