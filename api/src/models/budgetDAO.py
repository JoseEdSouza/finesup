from abc import ABC, abstractmethod
from budget import Budget
from api.src.db.database import Database
import psycopg2 as pg


class BudgetDAO(ABC):

    @abstractmethod
    def add(self, budget: Budget) -> bool:
        pass

    @abstractmethod
    def update(self, bud_id: int, budget: Budget) -> bool:
        pass

    @abstractmethod
    def remove(self, bud_id: int) -> bool:
        pass

    @abstractmethod
    def get(self, bud_id: int) -> Budget | None:
        pass


class BudgetDAOImp(BudgetDAO):
    __conn = None
    __cursor = None

    def __init__(self):
        db = Database()
        self.__conn = db.connection
        self.__cursor = self.__conn.cursor()

    def __save(self):
        self.__conn.commit()

    def add(self, budget: Budget) -> bool:
        values = (budget.cat.id, budget.final_value, budget.actual_value, budget.renewal_date)
        try:
            self.__cursor.execute('''
            INSERT INTO users (ex_cat_id,final_value,actual_value,renewal_date,creation_date) VALUES
            (
            %s,%s,%s,%s,now()
            )
            ''', values)
        except pg.ProgrammingError as e:
            print(e)
            return False
        finally:
            self.__save()
            return True

    def update(self, bud_id: int, budget: Budget) -> bool:
        values = (budget.cat.id, budget.final_value, budget.actual_value, budget.renewal_date, bud_id)
        try:
            self.__cursor.execute('''
            UPDATE users SET 
            ex_cat_id = %s,
            final_value = %s,
            actual_value = %s,
            renewal_date = %s,
            WHERE id = %s
            ''', values)
        except pg.ProgrammingError as e:
            print(e)
            return False
        finally:
            self.__save()
            return True

    def remove(self, bud_id: int) -> bool:
        try:
            self.__cursor.execute('''
            DELETE FROM users WHERE id = %s
            ''', (bud_id,))
        except pg.ProgrammingError as e:
            print(e)
            return False
        finally:
            self.__save()
            return True

    def get(self, bud_id: int) -> Budget | None:
        try:
            self.__cursor.execute('''
            SELECT * FROM users WHERE id = %s
            ''', (bud_id,))
            budget = self.__cursor.fetchone()
            # todo colocar categoryDAO no budget[2]
            return Budget(budget[0], budget[1], budget[2], budget[3], budget[4])
        except pg.ProgrammingError as e:
            print(e)
            return None
