import psycopg2 as pg
from abc import ABC, abstractmethod
from api.src.db.database import Database
from api.src.models.transaction import Transaction, Expense, Revenue


class TransactionDAO(ABC):

    @abstractmethod
    def add(self, transaction: Transaction) -> Transaction | None:
        pass

    @abstractmethod
    def update(self, t_id: int, transaction: Transaction) -> Transaction | None:
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

    def __init__(self):
        self.__db = Database()
        self.__conn = self.__db.connection
        self.__cursor = self.__conn.cursor()

    def __save(self):
        self.__conn.commit()

    def __rollback(self):
        self.__conn.rollback()

    def add(self, transaction: Expense) -> Expense | None:
        values = (transaction.user_id, transaction.name, transaction.description, transaction.value,
                  transaction.purchase_date, transaction.cat)
        try:
            self.__cursor.execute('''
            INSERT INTO expenses(user_id,name,description,value,purchase_date,ex_cat_id)
            VALUES (%s,%s,%s,%s,%s,%s)
            RETURNING id;
            ''', values)
            self.__save()
            res = self.__cursor.fetchone()
            if res is None:
                return None
            return Expense(
                id=res[0],
                name=transaction.name,
                description=transaction.description,
                value=transaction.value,
                purchase_date=transaction.purchase_date,
                user_id=transaction.user_id,
                cat=transaction.cat
            )
        except pg.Error as e:
            print(e)
            self.__rollback()
            return None

    def update(self, t_id: int, transaction: Expense) -> Expense | None:

        values = (transaction.name, transaction.description, transaction.value,
                  transaction.purchase_date, transaction.cat, t_id)
        try:
            self.__cursor.execute('''
            UPDATE expenses SET
            name = %s,
            description = %s,
            value = %s,
            purchase_date = %s,
            ex_cat_id = %s
            WHERE id = %s
            ''', values)
            self.__save()
            return Expense(
                id=t_id,
                name=transaction.name,
                description=transaction.description,
                value=transaction.value,
                purchase_date=transaction.purchase_date,
                user_id=transaction.user_id,
                cat=transaction.cat
            )
        except pg.Error as e:
            print(e)
            self.__rollback()
            return None

    def remove(self, t_id: int) -> bool:
        try:
            self.__cursor.execute('''
            DELETE FROM expenses WHERE id = %s
            ''', (t_id,))
            self.__save()
            return True
        except pg.Error as e:
            print(e)
            self.__rollback()
            return False

    def get(self, t_id: int) -> Expense | None:
        try:
            self.__cursor.execute('''
            SELECT ex.id,ex.name,ex.description,ex.value,ex.purchase_date,ex.user_id,ex.ex_cat_id
            FROM expenses ex
            WHERE ex.id = %s
            ''', (t_id,))
            exp = self.__cursor.fetchone()
            if exp is None:
                return None
            return Expense(
                id=exp[0],
                name=exp[1],
                description=exp[2],
                value=exp[3],
                purchase_date=exp[4],
                user_id=exp[5],
                cat=exp[6]
            )
        except pg.Error as e:
            print(e)
            return None

    def get_all(self, user_id: int) -> list[Expense] | None:
        try:
            self.__cursor.execute('''
            SELECT ex.id,ex.name,ex.description,ex.value,ex.purchase_date,ex.user_id,ex.ex_cat_id
            FROM expenses ex
            WHERE ex.user_id = %s
            ''', (user_id,))
            list_expenses = self.__cursor.fetchall()
            if len(list_expenses) == 0:
                return None
            expenses = list(map(lambda exp: Expense(
                id=exp[0],
                name=exp[1],
                description=exp[2],
                value=exp[3],
                purchase_date=exp[4],
                user_id=exp[5],
                cat=exp[6]
            ), list_expenses))
            return expenses
        except pg.Error as e:
            print(e)
            return None


class RevenueDAOImp(TransactionDAO):
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

    def add(self, transaction: Revenue) -> Revenue | None:
        values = (transaction.user_id, transaction.name, transaction.description, transaction.value,
                  transaction.purchase_date, transaction.cat)
        try:
            self.__cursor.execute('''
            INSERT INTO revenues(user_id,name,description,value,purchase_date,rev_cat_id)
            VALUES (%s,%s,%s,%s,%s,%s)
            RETURNING id;
            ''', values)
            self.__save()
            res = self.__cursor.fetchone()
            if res is None:
                return None
            return Revenue(
                id=res[0],
                name=transaction.name,
                description=transaction.description,
                value=transaction.value,
                purchase_date=transaction.purchase_date,
                user_id=transaction.user_id,
                cat=transaction.cat
            )
        except pg.Error as e:
            print(e)
            self.__rollback()
            return None

    def update(self, t_id: int, transaction: Revenue) -> Revenue | None:
        values = (transaction.name, transaction.description, transaction.value,
                  transaction.purchase_date, transaction.cat, t_id)
        try:
            self.__cursor.execute('''
            UPDATE revenues SET
            name = %s,
            description = %s,
            value = %s,
            purchase_date = %s,
            rev_cat_id = %s
            WHERE id = %s
            ''', values)
            self.__save()
            return Revenue(
                id=t_id,
                name=transaction.name,
                description=transaction.description,
                value=transaction.value,
                purchase_date=transaction.purchase_date,
                user_id=transaction.user_id,
                cat=transaction.cat
            )
        except pg.Error as e:
            print(e)
            self.__rollback()
            return None

    def remove(self, t_id: int) -> bool:
        try:
            self.__cursor.execute('''
            DELETE FROM revenues WHERE id = %s
            ''', (t_id,))
            self.__save()
            return True
        except pg.Error as e:
            print(e)
            self.__rollback()
            return False

    def get(self, t_id: int) -> Revenue | None:
        try:
            self.__cursor.execute('''
            SELECT rev.id,rev.name,rev.description,rev.value,rev.purchase_date,rev.user_id,rev.rev_cat_id
            FROM revenues rev
            WHERE rev.id = %s
            ''', (t_id,))
            rev = self.__cursor.fetchone()
            if rev is None:
                return None
            return Revenue(
                id=rev[0],
                name=rev[1],
                description=rev[2],
                value=rev[3],
                purchase_date=rev[4],
                user_id=rev[5],
                cat=rev[6]
            )
        except pg.Error as e:
            print(e)
            return None

    def get_all(self, user_id: int) -> list[Revenue] | None:
        try:
            self.__cursor.execute('''
            SELECT rev.id,rev.name,rev.description,rev.value,rev.purchase_date,rev.user_id,rev.rev_cat_id
            FROM revenues rev
            WHERE rev.user_id = %s
            ''', (user_id,))
            list_revenues = self.__cursor.fetchall()
            if len(list_revenues) == 0:
                return None
            revenues = list(map(lambda rev: Revenue(
                id=rev[0],
                name=rev[1],
                description=rev[2],
                value=rev[3],
                purchase_date=rev[4],
                user_id=rev[5],
                cat=rev[6]
            ), list_revenues))
            return revenues
        except pg.Error as e:
            print(e)
            return None
