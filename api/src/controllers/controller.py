from requests import request
from abc import ABC, abstractmethod


class Controller(ABC):
    @abstractmethod
    def handle_reqeust(self, req: request):
        pass
