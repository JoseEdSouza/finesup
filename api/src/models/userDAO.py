import psycopg2 as pg
from abc import ABC, abstractmethod
from api.src.models.user import User
from api.src.db.database import Database


class UserDAO(ABC):

    @abstractmethod
    def add(self, user: User) -> User | None:
        pass

    @abstractmethod
    def update(self, user_id: int, user: User) -> User | None:
        pass

    @abstractmethod
    def remove(self, user_id: int) -> bool:
        pass

    @abstractmethod
    def get(self, user_id: int) -> User | None:
        pass

    @abstractmethod
    def get_by_email(self, email: str):
        pass

    @abstractmethod
    def check(self, email: str, password: str) -> bool:
        pass


class UserDAOImp(UserDAO):
    __conn = None
    __cursor = None

    def __init__(self):
        self.__db = Database()
        self.__conn = self.__db.connection
        self.__cursor = self.__conn.cursor()

    def __save(self):
        self.__conn.commit()

    def __rollback(self):
        self.__conn.rollback()

    def add(self, user: User) -> User | None:
        values = (user.name, user.email, user.password)
        try:
            query = self.__cursor.execute('''
            INSERT INTO users (name, email, password, creation_date) 
            VALUES (%s, %s, MD5(%s), now())
            RETURNING id;
            ''', values)
            self.__save()
            res = self.__cursor.fetchone()
            if res is None:
                return None
            id = res[0]
            return User(user.name, user.email, user.password, id)

        except pg.Error as e:
            print(e)
            self.__rollback()
            return None

    def update(self, user_id: int, user: User) -> User | None:
        values = (user.name, user.email, user.password, user_id)

        try:
            self.__cursor.execute('''
            UPDATE users SET name = %s, email = %s, password = MD5(%s) WHERE id = %s
            ''', values)
            self.__save()
            return User(user.name, user.email, user.password, user_id)
        except pg.Error as e:
            print(e)
            self.__rollback()
            return None

    def remove(self, user_id: int) -> bool:
        try:
            self.__cursor.execute('''
            DELETE FROM users WHERE id = %s
            ''', (user_id,))
            self.__save()
            return True
        except pg.Error as e:
            print(e)
            self.__rollback()
            return False

    def get(self, user_id: int) -> User | None:
        try:
            self.__cursor.execute('''
            SELECT * FROM users WHERE id = %s
            ''', (user_id,))
            # id | name | email | password | creation_date
            result = self.__cursor.fetchone()
            if result is None:
                return None
            else:
                return User(
                    user_id=result[0],
                    name=result[1],
                    email=result[2],
                    password=result[3]
                )
        except pg.Error as e:
            print(e)
            return None

    def get_by_email(self, email: str) -> User | None:
        try:
            self.__cursor.execute('''
            SELECT * FROM users WHERE email = %s
            ''', (email,))
            # id | name | email | password | creation_date
            result = self.__cursor.fetchone()
            if result is None:
                return None
            else:
                return User(
                    user_id=result[0],
                    name=result[1],
                    email=result[2],
                    password=result[3]
                )
        except pg.Error as e:
            print(e)
            return None

    def check(self, email: str, password: str) -> bool:
        try:
            self.__cursor.execute('''
            SELECT * FROM users WHERE email = %s AND password = MD5(%s)
            ''', (email, password))
            result = self.__cursor.fetchone()
            return result is not None
        except pg.Error as e:
            print(e)
            return False
