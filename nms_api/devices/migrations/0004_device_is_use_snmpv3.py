# Generated by Django 3.2.4 on 2021-06-21 10:55

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('devices', '0003_auto_20210621_1853'),
    ]

    operations = [
        migrations.AddField(
            model_name='device',
            name='is_use_snmpv3',
            field=models.BooleanField(default=False),
        ),
    ]
