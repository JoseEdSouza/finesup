import psycopg2 as pg
from abc import ABC, abstractmethod
from api.src.db.database import Database
from api.src.models.transaction import Transaction, Expense, Revenue
from api.src.models.category import ExpenseCategory, RevenueCategory


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
        values = (user_id, transaction.name, transaction.description, transaction.value,
                  transaction.purchase_date, transaction.cat.id)
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
        values = (transaction.name, transaction.description, transaction.value,
                  transaction.purchase_date, transaction.cat.id)
        try:
            self.__cursor.execute('''
            UPDATE expenses SET
            name = %s
            description = %s
            value = %s
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


class RevenueDAOImp(TransactionDAO):
    __conn = None
    __cursor = None

    def __init__(self, db: Database):
        self.__conn = db.connection
        self.__cursor = self.__conn.cursor()

    def __save(self):
        self.__conn.commit()

    def add(self, user_id: int, transaction: Revenue) -> bool:
        values = (user_id, transaction.name, transaction.description, transaction.value,
                  transaction.purchase_date, transaction.cat.id)
        try:
            self.__cursor.execute('''
            INSERT INTO revenues(user_id,name,description,value,purchase_date,rev_cat_id)
            VALUES (%s,%s,%s,%s,%s,%s)
            ''', values)
        except pg.Error as e:
            print(e)
            return False
        finally:
            self.__save()
            return True

    def update(self, t_id: int, transaction: Revenue) -> bool:
        values = (transaction.name, transaction.description, transaction.value,
                  transaction.purchase_date, transaction.cat.id)
        try:
            self.__cursor.execute('''
            UPDATE revenues SET
            name = %s
            description = %s
            value = %s
            purchase_date = %s
            rev_cat_id = %s
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
            DELETE FROM revenues WHERE id = %s
            ''', (t_id,))
        except pg.Error as e:
            print(e)
            return False
        finally:
            self.__save()
            return True

    def get(self, t_id: int) -> Revenue | None:
        try:
            self.__cursor.execute('''
            SELECT * FROM revenues
            WHERE id = %s
            ''', (t_id,))
            rev = self.__cursor.fetchone()
            if rev is None:
                return None
            return Revenue(
                t_id=rev[0],
                name=rev[1],
                description=rev[2],
                value=rev[3],
                purchase_date=rev[4],
                user_id=rev[5],
                cat=RevenueCategory(rev[6], '')  # todo add CategoryDAO
            )
        except pg.Error as e:
            print(e)
            return None

    def get_all(self, user_id: int) -> list[Revenue] | None:
        try:
            self.__cursor.execute('''
            SELECT * FROM revenues
            WHERE user_id = %s
            ''', (user_id,))
            list_revenues = self.__cursor.fetchall()
            if len(list_revenues) == 0:
                return None
            revenues = list(map(lambda rev: Revenue(
                t_id=rev[0],
                name=rev[1],
                description=rev[2],
                value=rev[3],
                purchase_date=rev[4],
                user_id=rev[5],
                cat=RevenueCategory(rev[6], '')  # todo add CategoryDAO
            ), list_revenues))
            return revenues
        except pg.Error as e:
            print(e)
            return None
