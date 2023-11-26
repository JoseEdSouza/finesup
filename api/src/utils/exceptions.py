class AlreadyExistsError(Exception):
    def __int__(self, msg: str = ''):
        super().__init__(msg)


class NotFoundError(Exception):
    def __int__(self, msg: str = ''):
        super().__init__(msg)
