# Generated by Django 3.2.4 on 2021-06-24 11:17

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('devices', '0004_device_is_use_snmpv3'),
    ]

    operations = [
        migrations.CreateModel(
            name='DeviceModel',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('oid', models.CharField(max_length=20)),
                ('name', models.CharField(max_length=50)),
            ],
            options={
                'db_table': 'device_model',
            },
        ),
    ]
