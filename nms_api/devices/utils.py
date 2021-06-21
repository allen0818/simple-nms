from .models import Device

def get_all_devices():
    return Device.objects.all()