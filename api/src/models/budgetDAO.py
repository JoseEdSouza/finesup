from abc import ABC, abstractmethod
from api.src.models.budget import Budget
from api.src.db.database import Database
import psycopg2 as pg
from api.src.utils.singleton import Singleton


class BudgetDAO(ABC):

    @abstractmethod
    def add(self, user_id: int, budget: Budget) -> bool:
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

    def add(self, user_id: int, budget: Budget) -> bool:
        values = (user_id, budget.cat.id, budget.final_value, budget.actual_value, budget.renewal_date)
        try:
            self.__cursor.execute('''
            INSERT INTO budgets (user_id,ex_cat_id,final_value,actual_value,renewal_date,creation_date) VALUES
            (
            %s,%s,%s,%s,%s,now()
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
            UPDATE budgets SET 
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
            DELETE FROM budgets WHERE id = %s
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
            SELECT * FROM budgets WHERE id = %s
            ''', (bud_id,))
            budget = self.__cursor.fetchone()
            if budget is None:
                return None
            else:
                # todo colocar categoryDAO no budget[2] e add user_id
                #  id | actual_value | final_value | renewal_date | creation_date | user_id | ex_cat_id
                return Budget(budget[0], budget[5],budget[6], budget[3], budget[3], budget[1])
        except pg.ProgrammingError as e:
            print(e)
            return None


if __name__ == '__main__':
    from category import ExpenseCategory
    from datetime import  date
    x = BudgetDAOImp()
    x.add(5,budget=Budget(None,None,ExpenseCategory(1,'Alimentação'),date.today(),3000))