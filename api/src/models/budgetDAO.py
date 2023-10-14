import psycopg2 as pg
from abc import ABC, abstractmethod
from api.src.models.budget import Budget
from api.src.db.database import Database
from api.src.models.category import ExpenseCategory

class BudgetDAO(ABC):

    @abstractmethod
    def add(self, user_id: int, budget: Budget) -> bool:
        pass

    @abstractmethod
    def update(self, user_id: int, ex_cat: ExpenseCategory, budget: Budget) -> bool:
        pass

    @abstractmethod
    def remove(self, user_id: int, ex_cat: ExpenseCategory) -> bool:
        pass

    @abstractmethod
    def get(self, user_id: int, ex_cat: ExpenseCategory) -> Budget | None:
        pass

    @abstractmethod
    def get_all(self, user_id: int) -> list[Budget] | None:
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
        values = (user_id, budget.category.id, budget.final_value, budget.actual_value, budget.renewal_date)
        try:
            self.__cursor.execute('''
            INSERT INTO budgets (user_id,ex_cat_id,final_value,actual_value,renewal_date,creation_date) VALUES
            (
            %s,%s,%s,%s,%s,now()
            )
            ''', values)
        except pg.Error as e:
            print(e)
            return False
        finally:
            self.__save()
            return True

    def update(self, user_id: int, ex_cat: ExpenseCategory, budget: Budget) -> bool:
        values = (budget.category.id, budget.final_value, budget.actual_value, budget.renewal_date, user_id, ex_cat.id)
        try:
            self.__cursor.execute('''
            UPDATE budgets SET 
            ex_cat_id = %s,
            final_value = %s,
            actual_value = %s,
            renewal_date = %s
            WHERE user_id = %s AND ex_cat_id = %s
            ''', values)
        except pg.Error as e:
            print(e)
            return False
        finally:
            self.__save()
            return True

    def remove(self, user_id: int, ex_cat: ExpenseCategory) -> bool:
        try:
            self.__cursor.execute('''
            DELETE FROM budgets WHERE user_id = %s AND ex_cat_id = %s
            ''', (user_id, ex_cat.id))
        except pg.Error as e:
            print(e)
            return False
        finally:
            self.__save()
            return True

    def get(self, user_id: int, ex_cat: ExpenseCategory) -> Budget | None:
        try:
            self.__cursor.execute('''
            SELECT user_id,ex_cat_id,actual_value,final_value,renewal_date
             FROM budgets WHERE user_id = %s AND ex_cat_id = %s
            ''', (user_id, ex_cat.id))
            bud = self.__cursor.fetchone()
            if bud is None:
                return None
            else:
                # todo put categoryDAO no budget[2] e add user_id
                #  user_id | ex_cat_id | actual_value | final_value | renewal_date | creation_date
                return Budget(
                    user_id=bud[0],
                    cat=bud[1],
                    actual_value=bud[2],
                    final_value=bud[3],
                    renewal_date=bud[4]
                )
        except pg.Error as e:
            print(e)
            return None

    def get_all(self, user_id: int) -> list[Budget] | None:
        try:
            self.__cursor.execute('''
            SELECT user_id,ex_cat_id,actual_value,final_value,renewal_date
            FROM budgets WHERE user_id = %s
            ''', (user_id,))
            list_budgets = self.__cursor.fetchall()
            if len(list_budgets) == 0:
                return None
            buds = list(map(lambda bud: Budget(
                user_id=bud[0],
                cat=bud[1],
                actual_value=bud[2],
                final_value=bud[3],
                renewal_date=bud[4]
            ), list_budgets))
            # todo put categoryDAO no budget[2] e add user_id
            #   user_id | ex_cat_id | actual_value | final_value | renewal_date | creation_date
            return buds
        except pg.Error as e:
            print(e)
            return None
