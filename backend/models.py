from django.db import models
# from django.urls import reverse
from django.contrib.auth.models import User

# Create your models here.

# Bug Class:
TECHNOLOGIES = (
    ('Django', 'Django'),
    ('Django REST Framework', 'Django REST Framework'),
    ('JavaScript (ES9)', 'JavaScript (ES9)'),
    ('MongoDB', 'MongoDB'),
    ('PostgreSQL', 'PostgreSQL'),
    ('Python 3', 'Python 3'),    
    ('React.js', 'React.js'),
    ('React Native', 'React Native'),
    ('Deployment', 'Deployment'),
    ('Other', 'Other'),
)

STATUSES = (
    ('Open', 'Open'),
    ('Working on Solution', 'Working on Solution'),
    ('To Revisit', 'To Revisit'),
    ('Solved', 'Solved')
)

# Command Class:
TECHNOLOGIES_02 = (
    ('Django', 'Django'),
    ('Django REST Framework', 'Django REST Framework'),
    ('Git & GitHub', 'Git & GitHub'),
    ('Heroku', 'Heroku'),
    ('PostgreSQL', 'PostgreSQL'),
    ('PowerShell', 'PowerShell'),    
    ('Python 3', 'Python 3'),    
    ('React.js', 'React.js'),
    ('React Native', 'React Native'),
    ('Other', 'Other'),
)

TYPES = (
    ('Command', 'Command'),
    ('Documentation Link', 'Documentation Link'),
)


class Bug(models.Model):
    project = models.CharField(max_length=100, default='Over 9000!')
    technology = models.CharField(
        max_length=50,
        choices=TECHNOLOGIES,
        default=TECHNOLOGIES[0][0]
    )
    status = models.CharField(
        max_length=50,
        choices=STATUSES,
        default=STATUSES[0][0]
    )
    description = models.CharField(max_length=1000)
    error = models.CharField(max_length=1000)
    links = models.CharField(max_length=1000)
    solution = models.CharField(max_length=1000, default='Over 9000!')
    notes = models.CharField(max_length=1000, default='Over 9000!')
    timestamp = models.DateField(auto_now_add=True)
    # user = models.ForeignKey(User, on_delete=models.CASCADE)

    # def __str__(self):
    #     return self.skill


class Command(models.Model):
    technology = models.CharField(
        max_length=50,
        choices=TECHNOLOGIES_02,
        default=TECHNOLOGIES_02[0][0]
    )    
    description = models.CharField(max_length=1000, default='Over 9000!')
    command = models.CharField(max_length=1000, default='Over 9000!')
    type = models.CharField(
        max_length=50,
        choices=TYPES,
        default=TYPES[0][0]
    )    
    notes = models.CharField(max_length=1000, default='Over 9000!')
    timestamp = models.DateField(auto_now_add=True)
    # user = models.ForeignKey(User, on_delete=models.CASCADE)

    # def __str__(self):
    #     return self.skill

    # def get_absolute_url(self):
    #     return reverse('index')


    class User(models.Model):
        username = models.CharField(max_length=50)
