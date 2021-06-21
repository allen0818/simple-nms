import os
from celery import Celery

# Set the default Django settings module for the 'celery' program.
os.environ.setdefault('DJANGO_SETTINGS_MODULE', 'nms_api.settings')

app = Celery('nms_api')

# Using a string here means the worker doesn't have to serialize
# the configuration object to child processes.
# - namespace='CELERY' means all celery-related configuration keys
#   should have a `CELERY_` prefix.
app.config_from_object('django.conf:settings', namespace='CELERY')

# Load task modules from all registered Django apps.
app.autodiscover_tasks()

@app.on_after_configure.connect
def setup_periodic_tasks(sender, **kwargs):
    # Calls test('hello') every 10 seconds.
    # sender.add_periodic_task(10.0, test.s('hello'), name='add every 10')

    # Calls test('world') every 30 seconds
    # sender.add_periodic_task(30.0, test.s('world'), expires=10)

    # # Executes every Monday morning at 7:30 a.m.
    sender.add_periodic_task(
        crontab(hour=9, minute=30, day_of_week=1),
        test.s('Happy Mondays!'),
    )


@app.task(bind=True)
def debug_task(self):
    print(f'Request: {self.request!r}')

@app.task(bind=True)
def test(self, msg):
    print(msg)

# def add_custom_task():
#     from devices.tasks import add
#     add.delay(3, 5)

# add_custom_task()
# debug_task.delay()
