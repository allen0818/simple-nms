from django.db import models
from devices import snmp
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
            return iterator
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
            return iterator
        except Exception as e:
            logger.warning("Snmp set error.")
            raise e