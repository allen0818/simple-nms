import enum

class StrEnum(str, enum.Enum):
    pass

class LinkStatus(StrEnum):
    LINKUP = 'link up'
    LINKDOWN = 'link down'



