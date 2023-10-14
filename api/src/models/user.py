class User:

    def __init__(self, user_id: int | None, name: str, email: str, password: str):
        self.__user_id = user_id
        self.name = name
        self.email = email
        self.password = password

    @property
    def user_id(self) -> int:
        return self.__user_id

    def __str__(self):
        return f' User (ID: {self.__user_id}, Name: {self.name}, Email: {self.email}, Password: {self.password})'
