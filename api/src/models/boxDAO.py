from abc import ABC, abstractmethod
from box import Box
from api.src.db.database import Database
import psycopg2 as pg


class BoxDAO(ABC):

    @abstractmethod
    def add(self, box: Box) -> bool:
        pass

    @abstractmethod
    def update(self, box_id: int, box: Box) -> bool:
        pass

    @abstractmethod
    def remove(self, box_id: int) -> bool:
        pass

    @abstractmethod
    def get(self, box_id: int) -> Box | None:
        pass


class BoxDAOImp(BoxDAO):
    __conn = None
    __cursor = None

    def __init__(self):
        db = Database()
        self.__conn = db.connection
        self.__cursor = self.__conn.cursor()

    def add(self, box: Box) -> bool:

        values = (box.name, box.description, box.actual_value, box.final_value, box.concluded)
        try:
            self.__cursor.execute('''
            INSERT INTO boxes(name, description, actual_value, final_value, concluded, creation_date)
             VALUES (%s, %s, %s, %s, now())
            ''', values)

        except pg.ProgrammingError as e:
            print(e)
            return False
        finally:
            return True

    def update(self, box_id: int, box: Box) -> bool:
        values = (box.name, box.description, box.actual_value, box.final_value, box.concluded, box_id)
        try:
            self.__cursor.execute('''
            UPDATE boxes 
            SET name = %s, 
            description = %s, 
            actual_value = %s, 
            final_value = %s, 
            concluded = %s            
            WHERE id = %s
            ''', values)
        except pg.ProgrammingError as e:
            print(e)
            return False
        finally:
            return True

    def remove(self, box_id: int) -> bool:
        try:
            self.__cursor.execute('''
            DELETE FROM boxes WHERE id = %s
            ''', (box_id,))
        except pg.ProgrammingError as e:
            print(e)
            return False
        finally:
            return True

    def get(self, box_id: int) -> Box | None:
        try:
            self.__cursor.execute('''
                        SELECT * FROM boxes WHERE id = %s
                        ''', (box_id,))
            values = self.__cursor.fetchone()
            # id | name | description | actual_value | final_value | concluded | creation_date | user_id
            if values is None:
                return None

            return Box(values[0], values[1], values[2], values[4], values[3], values[5])
        except pg.ProgrammingError as e:
            print(e)
            return None
