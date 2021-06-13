from django.shortcuts import render
from rest_framework import viewsets, permissions
from rest_framework.decorators import action
from rest_framework.response import Response
from .models import Device
from .serializers import DeviceSerializer
from .tasks import get_status
# from nms_api.celery import dump_context

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

    @action(detail=False, methods=['get'], url_path='status')
    def get_status(self, request):
        # device = self.get_object()
        # sync_to_device(device)
        print('async get status')
        get_status.delay('device1')

        # print('async dump context')
        # dump_context.delay(2, 3)

        # from nms_api.celery import dump_context
        # print('async dump context')
        # dump_context.delay(2, 3)


        return Response(True)