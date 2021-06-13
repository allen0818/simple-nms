from celery import shared_task
import time

@shared_task
def get_status(msg):
    print('worker: get status {}'.format(msg))
    time.sleep(20)
    return 'ok la'

# @app.task(bind=True)
# def dump_context(self, x, y):
#     print('Executing task id {0.id}, args: {0.args!r} kwargs: {0.kwargs!r}'.format(
#             self.request))