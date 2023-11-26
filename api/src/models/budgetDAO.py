import psycopg2 as pg
from abc import ABC, abstractmethod
from api.src.models.budget import Budget
from api.src.db.database import Database


class BudgetDAO(ABC):

    @abstractmethod
    def add(self, budget: Budget) -> Budget | None:
        pass

    @abstractmethod
    def update(self, user_id: int, ex_cat_id: int, budget: Budget) -> Budget | None:
        pass

    @abstractmethod
    def remove(self, user_id: int, ex_cat_id: int) -> bool:
        pass

    @abstractmethod
    def get(self, user_id: int, ex_cat_id: int) -> Budget | None:
        pass

    @abstractmethod
    def get_all(self, user_id: int) -> list[Budget] | None:
        pass


class BudgetDAOImp(BudgetDAO):
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

    def add(self, budget: Budget) -> Budget | None:
        values = (budget.user_id, budget.category, budget.final_value, budget.actual_value, budget.renewal_date)
        try:
            self.__cursor.execute('''
            INSERT INTO budgets (user_id,ex_cat_id,final_value,actual_value,renewal_date,creation_date)
            VALUES (%s,%s,%s,%s,%s,now())
            ''', values)
            self.__save()
            return Budget(
                user_id=budget.user_id,
                category=budget.category,
                renewal_date=budget.renewal_date,
                actual_value=budget.actual_value,
                final_value=budget.final_value)
        except pg.Error as e:
            print(e)
            self.__rollback()
            return None

    def update(self, user_id: int, ex_cat_id: int, budget: Budget) -> Budget | None:
        values = (budget.category, budget.final_value, budget.actual_value, budget.renewal_date, user_id, ex_cat_id)
        try:
            self.__cursor.execute('''
            UPDATE budgets SET 
            ex_cat_id = %s,
            final_value = %s,
            actual_value = %s,
            renewal_date = %s
            WHERE user_id = %s AND ex_cat_id = %s
            ''', values)
            self.__save()
            return Budget(
                user_id=budget.user_id,
                category=budget.category,
                renewal_date=budget.renewal_date,
                actual_value=budget.actual_value,
                final_value=budget.final_value)
        except pg.Error as e:
            print(e)
            self.__rollback()
            return None

    def remove(self, user_id: int, ex_cat_id: int) -> bool:
        try:
            self.__cursor.execute('''
            DELETE FROM budgets WHERE user_id = %s AND ex_cat_id = %s
            ''', (user_id, ex_cat_id))
            self.__save()
            return True
        except pg.Error as e:
            print(e)
            self.__rollback()
            return False

    def get(self, user_id: int, ex_cat_id: int) -> Budget | None:
        try:
            self.__cursor.execute('''
            SELECT user_id,ex_cat_id,actual_value,final_value,renewal_date
            FROM budgets
            WHERE user_id = %s AND ex_cat_id = %s
            ''', (user_id, ex_cat_id))
            bud = self.__cursor.fetchone()
            if bud is None:
                return None
            else:
                return Budget(
                    user_id=bud[0],
                    category=bud[1],
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
            SELECT user_id,ex_cat_id ,actual_value,final_value,renewal_date
            FROM budgets
            WHERE user_id = %s
            ''', (user_id,))
            list_budgets = self.__cursor.fetchall()
            if len(list_budgets) == 0:
                return None
            buds = list(map(lambda bud: Budget(
                user_id=bud[0],
                category=bud[1],
                actual_value=bud[2],
                final_value=bud[3],
                renewal_date=bud[4]
            ), list_budgets))
            return buds
        except pg.Error as e:
            print(e)
            return None
