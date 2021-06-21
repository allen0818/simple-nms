import time
from celery import shared_task
from .utils import get_all_devices

@shared_task
def get_status(msg=None):
    print('worker: get status {}'.format(msg))
    # time.sleep(20)
    device_list = get_all_devices()
    for device in device_list:
        r = device.snmp_get('1.3.6.1.2.1.1.2.0')

    return 'ok la'

# @app.task(bind=True)
# def dump_context(self, x, y):
#     print('Executing task id {0.id}, args: {0.args!r} kwargs: {0.kwargs!r}'.format(
#             self.request))