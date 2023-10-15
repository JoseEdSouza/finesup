import psycopg2 as pg
from abc import ABC, abstractmethod
from api.src.db.database import Database
from api.src.models.transaction import Transaction, Expense, Revenue
from api.src.models.category import ExpenseCategory


class TransactionDAO(ABC):

    @abstractmethod
    def add(self, user_id: int, transaction: Transaction) -> bool:
        pass

    @abstractmethod
    def update(self, t_id: int, transaction: Transaction) -> bool:
        pass

    @abstractmethod
    def remove(self, t_id: int) -> bool:
        pass

    @abstractmethod
    def get(self, t_id: int) -> Transaction | None:
        pass

    @abstractmethod
    def get_all(self, user_id: int) -> list[Transaction] | None:
        pass


class ExpenseDAOImp(TransactionDAO):
    __conn = None
    __cursor = None

    def __init__(self, db: Database):
        self.__conn = db.connection
        self.__cursor = self.__conn.cursor()

    def __save(self):
        self.__conn.commit()

    def add(self, user_id: int, transaction: Expense) -> bool:
        values = (user_id, transaction.name, transaction.description, transaction.purchase_date,
                  transaction.cat.id)
        try:
            self.__cursor.execute('''
            INSERT INTO expenses(user_id,name,description,value,purchase_date,ex_cat_id)
            VALUES (%s,%s,%s,%s,%s,%s)
            ''', values)
        except pg.Error as e:
            print(e)
            return False
        finally:
            self.__save()
            return True

    def update(self, t_id: int, transaction: Expense) -> bool:
        values = (transaction.name, transaction.description, transaction.purchase_date,
                  transaction.cat.id)
        try:
            self.__cursor.execute('''
            UPDATE expenses SET
            name = %s
            description = %s
            purchase_date = %s
            ex_cat_id = %s
            WHERE id = %s
            ''', values)
        except pg.Error as e:
            print(e)
            return False
        finally:
            self.__save()
            return True

    def remove(self, t_id: int) -> bool:
        try:
            self.__cursor.execute('''
            DELETE FROM expenses WHERE id = %s
            ''', (t_id,))
        except pg.Error as e:
            print(e)
            return False
        finally:
            self.__save()
            return True

    def get(self, t_id: int) -> Expense | None:
        try:
            self.__cursor.execute('''
            SELECT * FROM expenses
            WHERE id = %s
            ''', (t_id,))
            exp = self.__cursor.fetchone()
            if exp is None:
                return None
            return Expense(
                t_id=exp[0],
                name=exp[1],
                description=exp[2],
                value=exp[3],
                purchase_date=exp[4],
                user_id=exp[5],
                cat=ExpenseCategory(exp[6], '')  # todo add CategoryDAO
            )
        except pg.Error as e:
            print(e)
            return None

    def get_all(self, user_id: int) -> list[Expense] | None:
        try:
            self.__cursor.execute('''
            SELECT * FROM expenses
            WHERE user_id = %s
            ''', (user_id,))
            list_expenses = self.__cursor.fetchall()
            if len(list_expenses) == 0:
                return None
            expenses = list(map(lambda exp: Expense(
                t_id=exp[0],
                name=exp[1],
                description=exp[2],
                value=exp[3],
                purchase_date=exp[4],
                user_id=exp[5],
                cat=ExpenseCategory(exp[6], '')  # todo add CategoryDAO
            ), list_expenses))
            return expenses
        except pg.Error as e:
            print(e)
            return None
