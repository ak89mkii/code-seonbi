# Generated by Django 3.2.8 on 2022-03-01 14:15

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('backend', '0001_initial'),
    ]

    operations = [
        migrations.AddField(
            model_name='bug',
            name='project',
            field=models.CharField(default='OVer 9000!', max_length=100),
        ),
        migrations.AddField(
            model_name='bug',
            name='solution',
            field=models.CharField(default='OVer 9000!', max_length=1000),
        ),
    ]