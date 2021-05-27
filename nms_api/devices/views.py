from django.shortcuts import render
from rest_framework import viewsets, permissions
from .models import Device
from .serializers import DeviceSerializer

# Create your views here.
class DeviceViewSet(viewsets.ModelViewSet):
    """
    This viewset automatically provides `list`, `create`, `retrieve`,
    `update` and `destroy` actions.

    Additionally we also provide an extra `highlight` action.
    """
    queryset = Device.objects.all()
    serializer_class = DeviceSerializer
    permission_classes = [permissions.AllowAny]