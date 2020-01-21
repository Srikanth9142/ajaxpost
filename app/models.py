from django.db import models

# Create your models here.
class TestModel(models.Model):
	file = models.ImageField(upload_to="media/",null=True)
	name = models.CharField(max_length=30)
	description = models.TextField(max_length=200)
