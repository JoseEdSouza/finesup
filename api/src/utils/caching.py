from abc import ABC, abstractmethod
from datetime import datetime
from typing import Any
from api.src.utils.singleton import ABCSingletonMeta


class Caching(ABC, metaclass=ABCSingletonMeta):
    _values: dict[int, Any] = {}
    _last_update: datetime | None = None
    _DAO = None

    @abstractmethod
    def __init__(self, class_dao):
        self._DAO = class_dao

    @abstractmethod
    def get(self, cat_id: int):
        pass

    @abstractmethod
    def _is_updatable(self) -> bool:
        pass

    @abstractmethod
    def _update(self):
        pass
