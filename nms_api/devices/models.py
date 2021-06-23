from django.db import models
from devices import snmp
from devices.mibs import mib2
from .enums import LinkStatus

import logging

logger = logging.getLogger(__name__)


# Create your models here.
class Device(models.Model):
    id = models.AutoField(auto_created=True, primary_key=True)
    name = models.CharField(max_length=50, blank=True, default="")
    ip = models.CharField(max_length=50, unique=True)
    snmp_port = models.IntegerField(default=161)
    get_community = models.CharField(max_length=50, default="public")
    set_community = models.CharField(max_length=50, default="private")
    is_use_snmpv3 = models.BooleanField(default=False)
    model = models.CharField(max_length=50)
    state = models.CharField(max_length=50)
    created_at = models.DateTimeField(auto_now_add=True)
    updated_at = models.DateTimeField(auto_now=True)

    class Meta:
        db_table = "device"

    def snmp_get(self, oid, timeout=None, retries=None):
        ip = self.ip
        port = self.snmp_port
        community = self.get_community

        try:
            # 之後要根據設定，選擇用 SNMPv1v2 或 SNMPv3
            logger.info('Send snmp-get to {}:{}'.format(ip, port))
            iterator = snmp.SnmpV1V2().get_request(ip, port, community, oid, timeout, retries)

            errorIndication, errorStatus, errorIndex, varBinds = next(iterator)
            if errorIndication or errorStatus:
                logger.error('SNMP-GET failed.')
                return None
            else:
                name, val = varBinds[0]
                return None if val is None else str(val)

        except Exception as e:
            logger.warning("Snmp get error.")
            raise e

    def snmp_set(self, oid, value, timeout=None, retries=None):
        ip = self.ip
        port = self.snmp_port
        community = self.set_community

        try:
            # 之後要根據設定，選擇用 SNMPv1v2 或 SNMPv3
            iterator = snmp.SnmpV1V2().set_request(ip, port, community, oid, value, timeout, retries)

            errorIndication, errorStatus, errorIndex, varBinds = next(iterator)
            if errorIndication or errorStatus:
                logger.error('SNMP-SET failed.')
                return None
            else:
                name, val = varBinds[0]
                return None if val is None else str(val)

        except Exception as e:
            logger.warning("Snmp set error.")
            raise e

    def update_link_status(self):
        logger.info("Update device {}'s link status.".format(self.name))

        try:
            r = self.snmp_get(mib2.SYS_OBJECT_ID)

            # 之後要補上自動判斷型號

            # 更新 link 狀態
            linkStatusEnum = LinkStatus.LINKDOWN if r is None else LinkStatus.LINKUP

            if self.state != linkStatusEnum:
                self.state = linkStatusEnum.value
                self.save()

            logger.info('current state: {}'.format(self.state))

        except Exception as e:
            logger.error("Failed to update device {}'s link status.")
            logger.error(e)