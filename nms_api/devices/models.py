from django.db import models

# Create your models here.
class Device(models.Model):
    id = models.AutoField(auto_created=True, primary_key=True)
    name = models.CharField(max_length=50, blank=True, default="")
    ip_addr = models.CharField(max_length=50, unique=True)
    model = models.CharField(max_length=50)
    state = models.CharField(max_length=50)
    created_at = models.DateTimeField(auto_now_add=True)
    updated_at = models.DateTimeField(auto_now=True)

    class Meta:
        db_table = "device"