# Generated by Django 3.2.8 on 2022-02-28 21:53

from django.db import migrations, models


class Migration(migrations.Migration):

    initial = True

    dependencies = [
    ]

    operations = [
        migrations.CreateModel(
            name='Bug',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('technology', models.CharField(choices=[('Python 3', 'Python 3'), ('Django', 'Django'), ('JavaScript (ES9)', 'JavaScript (ES9)'), ('React.js)', 'React.js)'), ('PostgreSQL', 'PostgreSQL')], default='Python 3', max_length=20)),
                ('status', models.CharField(choices=[('Pending', 'Pending'), ('Solved', 'Solved')], default='Pending', max_length=20)),
                ('description', models.CharField(max_length=1000)),
                ('error', models.CharField(max_length=1000)),
                ('links', models.CharField(max_length=1000)),
                ('timestamp', models.DateField(auto_now_add=True)),
            ],
        ),
    ]