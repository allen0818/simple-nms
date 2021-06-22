from .models import Device
import logging

logger = logging.getLogger(__name__)

def get_all_devices():
    return Device.objects.all()