# Generated by Django 3.2.8 on 2024-04-24 16:32

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('backend', '0006_remove_command_notes'),
    ]

    operations = [
        migrations.RemoveField(
            model_name='bug',
            name='notes',
        ),
        migrations.AddField(
            model_name='command',
            name='notes',
            field=models.CharField(default='Over 9000!', max_length=1000),
        ),
    ]
