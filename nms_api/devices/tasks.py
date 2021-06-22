import time
import logging

from celery import shared_task
from .utils import get_all_devices

logger = logging.getLogger(__name__)

@shared_task
def get_status(msg=None):
    print('worker: get status {}'.format(msg))
    # time.sleep(20)
    device_list = get_all_devices()
    logger.info("device's count: {}".format(len(device_list)))

    for d in device_list:
        d.update_link_status()

    return 'ok la'

# @app.task(bind=True)
# def dump_context(self, x, y):
#     print('Executing task id {0.id}, args: {0.args!r} kwargs: {0.kwargs!r}'.format(
#             self.request))