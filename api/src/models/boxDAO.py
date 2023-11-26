import psycopg2 as pg
from abc import ABC, abstractmethod
from api.src.models.box import Box
from api.src.db.database import Database


class BoxDAO(ABC):

    @abstractmethod
    def add(self, box: Box) -> Box | None:
        pass

    @abstractmethod
    def update(self, user_id: int, name: str, box: Box) -> Box | None:
        pass

    @abstractmethod
    def remove(self, user_id: int, name: str) -> bool:
        pass

    @abstractmethod
    def get(self, user_id: int, name: str) -> Box | None:
        pass

    @abstractmethod
    def get_all(self, user_id: int) -> list[Box] | None:
        pass


class BoxDAOImp(BoxDAO):
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

    def add(self, box: Box) -> Box | None:

        values = (box.user_id, box.name, box.description, box.actual_value, box.final_value, box.concluded)
        try:
            self.__cursor.execute('''
            INSERT INTO boxes(user_id, name, description, actual_value, final_value, concluded, creation_date)
             VALUES (%s, %s, %s, %s, %s, %s, now())
            ''', values)
            self.__save()

            return Box(
                user_id=box.user_id,
                name=box.name,
                description=box.description,
                final_value=box.final_value,
                actual_value=box.actual_value,
                concluded=box.concluded)

        except pg.Error as e:
            print(e)
            self.__rollback()
            return None

    def update(self, user_id: int, name_box: str, box: Box) -> Box | None:
        values = (box.name, box.description, box.actual_value, box.final_value, box.concluded, user_id, name_box)
        try:
            self.__cursor.execute('''
            UPDATE boxes 
            SET name = %s, 
            description = %s, 
            actual_value = %s, 
            final_value = %s, 
            concluded = %s            
            WHERE user_id = %s AND name = %s
            ''', values)
            self.__save()
            return Box(
                name=box.name,
                description=box.description,
                actual_value=box.actual_value,
                final_value=box.final_value,
                concluded=box.concluded,
                user_id=user_id)
        except pg.Error as e:
            print(e)
            self.__rollback()
            return None

    def remove(self, user_id: int, name: str) -> bool:
        try:
            self.__cursor.execute('''
            DELETE FROM boxes WHERE user_id = %s AND name = %s
            ''', (user_id, name))
            self.__save()
            return True
        except pg.Error as e:
            print(e)
            self.__rollback()
            return False

    def get(self, user_id: int, name: str) -> Box | None:
        try:
            self.__cursor.execute('''
                        SELECT user_id, name, description, actual_value, final_value, concluded
                        FROM boxes WHERE user_id = %s AND name = %s
                        ''', (user_id, name))
            values = self.__cursor.fetchone()
            # [0]user_id [1]name [2]description [3]actual_value [4]final_value [5]concluded

            if values is None:
                return None

            return Box(
                user_id=values[0],
                name=values[1],
                description=values[2],
                actual_value=values[3],
                final_value=values[4],
                concluded=values[5]
            )
        except pg.Error as e:
            print(e)
            return None

    def get_all(self, user_id: int) -> list[Box] | None:
        try:
            self.__cursor.execute('''
                        SELECT user_id, name, description, actual_value, final_value, concluded 
                        FROM boxes WHERE user_id = %s
                        ''', (user_id,))
            values = self.__cursor.fetchall()

            if len(values) == 0:
                return None

            b = list(map(lambda value: Box(
                user_id=value[0],
                name=value[1],
                description=value[2],
                actual_value=value[3],
                final_value=value[4],
                concluded=value[5]
            ), values))

            return b
        except pg.Error as e:
            print(e)
            return None
