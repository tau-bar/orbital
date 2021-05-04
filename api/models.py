from django.db import models
from django.core.validators import MaxValueValidator, MinValueValidator

# Create your models here.
class Virus(models.Model):
    name = models.CharField(max_length = 20, unique = False, null = False)
    genus = models.CharField(max_length = 30, unique = False, null = False)
    size = models.IntegerField(default = 10, unique = False, null = False)
    color = models.CharField(max_length = 10, unique = False, null = False)
    deadliness = models.IntegerField(
        validators=[MaxValueValidator(100), MinValueValidator(1)],
        default = 10
    )
    has_vaccine = models.BooleanField(default = True)
    created_at = models.DateTimeField(auto_now_add=True)
