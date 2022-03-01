from django.db import models
# from django.urls import reverse
# from django.contrib.auth.models import User

# Create your models here.
TECHNOLOGIES = (
    ('Python 3', 'Python 3'),
    ('Django', 'Django'),
    ('JavaScript (ES9)', 'JavaScript (ES9)'),
    ('React.js)', 'React.js)'),
    ('PostgreSQL', 'PostgreSQL')
)

STATUSES = (
    ('Pending', 'Pending'),
    ('Solved', 'Solved')
)

class Bug(models.Model):
    project = models.CharField(max_length=100, default='Over 9000!')
    technology = models.CharField(
        max_length=20,
        choices=TECHNOLOGIES,
        default=TECHNOLOGIES[0][0]
    )
    status = models.CharField(
        max_length=20,
        choices=STATUSES,
        default=STATUSES[0][0]
    )
    description = models.CharField(max_length=1000)
    error = models.CharField(max_length=1000)
    links = models.CharField(max_length=1000)
    solution = models.CharField(max_length=1000, default='Over 9000!')
    timestamp = models.DateField(auto_now_add=True)
    # user = models.ForeignKey(User, on_delete=models.CASCADE)

    # def __str__(self):
    #     return self.skill

    # def get_absolute_url(self):
    #     return reverse('index')