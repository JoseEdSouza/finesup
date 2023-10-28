from abc import ABC, abstractmethod
from requests import request


class Controller(ABC):

    @abstractmethod
    def handle_request(self, req: request):
        pass
