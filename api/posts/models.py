from django.db import models

# Create your models here.
class Post(models.Model):
    id = models.AutoField(auto_created=True, primary_key=True)
    title = models.CharField(max_length=50, blank=True, default='')
    content = models.TextField(blank=True, null=True, default='')