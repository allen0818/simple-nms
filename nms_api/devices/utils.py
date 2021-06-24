from .models import Device, DeviceModel
import logging

logger = logging.getLogger(__name__)

def get_all_devices():
    return Device.objects.all()

def get_device_models():
    return DeviceModel.objects.all()

def get_model_by_oid(model_oid):
    all_models = get_device_models()
    return next((m for m in all_models if m.oid == model_oid), None)