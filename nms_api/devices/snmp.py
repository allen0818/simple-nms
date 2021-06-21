from pysnmp.hlapi import *
import logging

logger = logging.getLogger(__name__)

class SnmpBase:
    def __init__(self):
        """ default settings """
        self.get_timeout = 1
        self.get_retries = 5
        self.set_timeout = 3
        self.set_retries = 0

    def update_setting(self, get_timeout=None, get_retries=None, set_timeout=None, set_retries=None):
        if get_timeout != None:
            self.get_timeout = get_timeout
        if get_retries != None:
            self.get_retries = get_retries
        if set_timeout != None:
            self.set_timeout = set_timeout
        if set_retries != None:
            self.set_retries = set_retries

class SnmpV1V2(SnmpBase):
    def __init__(self, get_timeout=None, get_retries=None, set_timeout=None, set_retries=None):
        super(SnmpV1V2, self).__init__() # 呼叫父類別__init__()
        self.update_setting(get_timeout, get_retries, set_timeout, set_retries)

    def get_request(self, ip, port, get_comm, oid, timeout=None, retries=None):
        self.update_setting(get_timeout=timeout, get_retries=retries)

        g = getCmd(SnmpEngine(),
            CommunityData(get_comm),
            UdpTransportTarget((ip, port), timeout=self.get_timeout, retries=self.get_retries),
            ContextData(),
            ObjectType(ObjectIdentity(oid)))
        return g

    def set_request(self, ip, port, set_comm, oid, value, timeout=None, retries=None):
        self.update_setting(set_timeout=timeout, set_retries=retries)

        set_value = Integer(value) if isinstance(value, int) else OctetString(value)
        g = setCmd(SnmpEngine(),
            CommunityData(set_comm),
            UdpTransportTarget((ip, port), timeout=self.set_timeout, retries=self.set_retries),
            ContextData(),
            ObjectType(ObjectIdentity(oid), set_value))
        return g

class SnmpV3(SnmpBase):
    def __init__(self, get_timeout=None, get_retries=None, set_timeout=None, set_retries=None):
        super(SnmpV3, self).__init__() # 呼叫父類別__init__()
        self.update_setting(get_timeout, get_retries, set_timeout, set_retries)

    def get_request(self, ip, port, oid, username, auth_key=None, priv_key=None, auth_protocol=None, priv_protocol=None, context_name='', timeout=None, retries=None):
        self.update_setting(get_timeout=timeout, get_retries=retries)

        g = getCmd(SnmpEngine(),
            UsmUserData(username, auth_key, priv_key, auth_protocol, priv_protocol),
            UdpTransportTarget((ip, port), timeout=self.get_timeout, retries=self.get_retries),
            ContextData(contextName=context_name),
            ObjectType(ObjectIdentity(oid)))
        return g

    def set_request(self, ip, port, oid, value, username, auth_key=None, priv_key=None, auth_protocol=None, priv_protocol=None, context_name='', timeout=None, retries=None):
        self.update_setting(set_timeout=timeout, set_retries=retries)

        set_value = Integer(value) if isinstance(value, int) else OctetString(value)

        g = setCmd(SnmpEngine(),
            UsmUserData(username, auth_key, priv_key, auth_protocol, priv_protocol),
            UdpTransportTarget((ip, port), timeout=self.set_timeout, retries=self.set_retries),
            ContextData(contextName=context_name),
            ObjectType(ObjectIdentity(oid), set_value))
        return g

class SnmpError(Exception):
    pass

def get_auth_protocol_by_str(value):
    '''
    usmHMACMD5AuthProtocol
    usmHMACSHAAuthProtocol
    usmHMAC128SHA224AuthProtocol
    usmHMAC192SHA256AuthProtocol
    usmHMAC256SHA384AuthProtocol
    usmHMAC384SHA512AuthProtocol
    usmNoAuthProtocol
    '''
    result = None
    if value == 'MD5':
        result = usmHMACMD5AuthProtocol
    elif value == 'SHA1':
        result = usmHMACSHAAuthProtocol

    return result

def get_priv_protocol_by_str(value):
    '''
    usmDESPrivProtocol
    usm3DESEDEPrivProtocol
    usmAesCfb128Protocol
    usmAesCfb192Protocol
    usmAesCfb256Protocol
    usmNoPrivProtocol
    '''
    result = None
    if value == 'DES':
        result = usmDESPrivProtocol
    elif value == 'AES128':
        result = usmAesCfb128Protocol
    return result


def create_obj_type_by_oid_list(oid_list):
    return [ObjectType(ObjectIdentity(oid)) for oid in oid_list]