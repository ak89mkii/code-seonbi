# Generated by Django 3.2.8 on 2024-04-24 16:31

from django.db import migrations


class Migration(migrations.Migration):

    dependencies = [
        ('backend', '0005_remove_command_owner'),
    ]

    operations = [
        migrations.RemoveField(
            model_name='command',
            name='notes',
        ),
    ]
