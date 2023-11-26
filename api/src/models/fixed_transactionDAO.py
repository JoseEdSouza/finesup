import psycopg2 as pg
from abc import ABC, abstractmethod
from api.src.db.database import Database
from api.src.models.fixed_transaction import FixedTransaction, FixedRevenue, FixedExpense
from api.src.utils.frequency import Frequency


class FixedTransactionDAO(ABC):

    @abstractmethod
    def add(self, transaction: FixedTransaction) -> FixedTransaction | None:
        pass

    @abstractmethod
    def update(self, ft_id: int, transaction: FixedTransaction) -> FixedTransaction | None:
        pass

    @abstractmethod
    def remove(self, ft_id: int) -> bool:
        pass

    @abstractmethod
    def get(self, ft_id: int) -> FixedTransaction | None:
        pass

    @abstractmethod
    def get_all(self, user_id: int) -> list[FixedTransaction] | None:
        pass


class FixedExpenseDAOImp(FixedTransactionDAO):
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

    def add(self, transaction: FixedExpense) -> FixedExpense | None:
        values = (transaction.user_id, transaction.name, transaction.description,
                  transaction.purchase_date, transaction.limit_date, Frequency(transaction.frequency).value,
                  transaction.value, transaction.cat)
        try:
            # id | name | description | purchase_date | limit_date | frequency | value | user_id | ex_cat_id
            self.__cursor.execute('''
            INSERT INTO fixed_expenses(user_id, name,description,purchase_date,limit_date,frequency,value,ex_cat_id)
            VALUES (%s,%s,%s,%s,%s,%s,%s,%s)
            RETURNING id;
            ''', values)
            self.__save()
            res = self.__cursor.fetchone()
            if res is None:
                return None
            return FixedExpense(
                ft_id=res[0],
                name=transaction.name,
                description=transaction.description,
                purchase_date=transaction.purchase_date,
                limit_date=transaction.limit_date,
                frequency=Frequency(transaction.frequency).value,
                value=transaction.value,
                user_id=transaction.user_id,
                cat=transaction.cat
            )
        except pg.Error as e:
            print(e)
            self.__rollback()
            self.__save()
            return None
        except ValueError as val:
            print(val)
            return None

    def update(self, ft_id: int, transaction: FixedExpense) -> FixedExpense | None:
        # id | name | description | purchase_date | limit_date | frequency | value | user_id | ex_cat_id
        values = (transaction.name, transaction.description,
                  transaction.purchase_date, transaction.limit_date, Frequency(transaction.frequency).value,
                  transaction.value, transaction.cat, ft_id)
        try:
            self.__cursor.execute('''
            UPDATE fixed_expenses SET
            name = %s,
            description = %s,
            purchase_date = %s,
            limit_date = %s,
            frequency = %s,
            value = %s,
            ex_cat_id = %s
            WHERE id = %s
            ''', values)
            self.__save()
            return FixedExpense(
                ft_id=ft_id,
                name=transaction.name,
                description=transaction.description,
                purchase_date=transaction.purchase_date,
                limit_date=transaction.limit_date,
                frequency=Frequency(transaction.frequency).value,
                value=transaction.value,
                user_id=transaction.user_id,
                cat=transaction.cat
            )
        except pg.Error as e:
            print(e)
            self.__rollback()
            self.__save()
            return None
        except ValueError as val:
            print(val)
            return None

    def remove(self, ft_id: int) -> bool:
        try:
            self.__cursor.execute('''
            DELETE FROM fixed_expenses WHERE id = %s
            ''', (ft_id,))
            self.__save()
            return True
        except pg.Error as e:
            print(e)
            self.__rollback()
            self.__save()
            return False

    def get(self, ft_id: int) -> FixedExpense | None:
        try:
            self.__cursor.execute('''
            SELECT fx.id, fx.name, fx.description, fx.purchase_date, fx.limit_date, fx.frequency, fx.value, 
            fx.user_id, fx.ex_cat_id
            FROM fixed_expenses fx 
            WHERE fx.id = %s;
            ''', (ft_id,))
            exp = self.__cursor.fetchone()
            if exp is None:
                return None
            # id | name | description | purchase_date | limit_date | frequency | value | user_id | ex_cat_id
            return FixedExpense(
                ft_id=exp[0],
                name=exp[1],
                description=exp[2],
                purchase_date=exp[3],
                limit_date=exp[4],
                frequency=Frequency(exp[5]).value,
                value=exp[6],
                user_id=exp[7],
                cat=exp[8]
            )
        except pg.Error as e:
            print(e)
            return None
        except ValueError as val:
            print(val)
            return None

    def get_all(self, user_id: int) -> list[FixedExpense] | None:
        try:
            self.__cursor.execute('''
            SELECT fx.id, fx.name, fx.description, fx.purchase_date, fx.limit_date, fx.frequency, fx.value, 
            fx.user_id, fx.ex_cat_id 
            FROM fixed_expenses fx
            WHERE user_id = %s
            ''', (user_id,))
            list_fix_expenses = self.__cursor.fetchall()
            if len(list_fix_expenses) == 0:
                return None
            #  id | name | description | purchase_date | limit_date | frequency | value | user_id | ex_cat_id
            expenses = list(map(lambda exp: FixedExpense(
                id=exp[0],
                name=exp[1],
                description=exp[2],
                purchase_date=exp[3],
                limit_date=exp[4],
                frequency=Frequency(exp[5]).value,
                value=exp[6],
                user_id=exp[7],
                cat=exp[8]
            ), list_fix_expenses))
            return expenses
        except pg.Error as e:
            print(e)
            return None


class FixedRevenueDAOImp(FixedTransactionDAO):
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

    def add(self, transaction: FixedRevenue) -> FixedRevenue | None:
        values = (transaction.user_id, transaction.name, transaction.description,
                  transaction.purchase_date, transaction.limit_date, Frequency(transaction.frequency).value,
                  transaction.value, transaction.cat)
        # id | name | description | value | purchase_date | limit_date | frequency | user_id | rev_cat_id
        try:
            self.__cursor.execute('''
            INSERT INTO fixed_revenues(user_id,name,description,purchase_date,limit_date,frequency,value,rev_cat_id)
            VALUES (%s,%s,%s,%s,%s,%s,%s,%s)
            RETURNING id;
            ''', values)
            self.__save()
            res = self.__cursor.fetchone()
            if res is None:
                return None
            return FixedRevenue(
                ft_id=res[0],
                name=transaction.name,
                description=transaction.description,
                purchase_date=transaction.purchase_date,
                limit_date=transaction.limit_date,
                frequency=Frequency(transaction.frequency).value,
                value=transaction.value,
                user_id=transaction.user_id,
                cat=transaction.cat
            )
        except pg.Error as e:
            print(e)
            self.__rollback()
            return None
        except ValueError as val:
            print(val)
            return None

    def update(self, ft_id: int, transaction: FixedRevenue) -> FixedRevenue | None:
        values = (transaction.name, transaction.description,
                  transaction.purchase_date, transaction.limit_date, Frequency(transaction.frequency).value,
                  transaction.value, transaction.cat, ft_id)
        try:
            self.__cursor.execute('''
            UPDATE fixed_revenues SET
            name = %s,
            description = %s,
            purchase_date = %s,
            limit_date = %s,
            frequency = %s,
            value = %s,
            rev_cat_id = %s
            WHERE id = %s
            ''', values)
            self.__save()
            return FixedRevenue(
                ft_id=ft_id,
                name=transaction.name,
                description=transaction.description,
                purchase_date=transaction.purchase_date,
                limit_date=transaction.limit_date,
                frequency=Frequency(transaction.frequency).value,
                value=transaction.value,
                user_id=transaction.user_id,
                cat=transaction.cat
            )
        except pg.Error as e:
            print(e)
            self.__rollback()
            return None
        except ValueError as val:
            print(val)
            return None

    def remove(self, ft_id: int) -> bool:
        try:
            self.__cursor.execute('''
            DELETE FROM fixed_revenues WHERE id = %s
            ''', (ft_id,))
            self.__save()
            return True
        except pg.Error as e:
            print(e)
            self.__rollback()
            return False

    def get(self, t_id: int) -> FixedRevenue | None:
        try:
            self.__cursor.execute('''
            SELECT r.id, r.name, r.description, r.value, r.purchase_date, r.limit_date, r.frequency, r.user_id, r.rev_cat_id
            FROM fixed_revenues r 
            WHERE r.id = %s
            ''', (t_id,))
            rev = self.__cursor.fetchone()
            if rev is None:
                return None
            # id | name | description | value | purchase_date | limit_date | frequency | user_id | rev_cat_id
            return FixedRevenue(
                id=rev[0],
                name=rev[1],
                description=rev[2],
                value=rev[3],
                purchase_date=rev[4],
                limit_date=rev[5],
                frequency=Frequency(rev[6]).value,
                user_id=rev[7],
                cat=rev[8]
            )
        except pg.Error as e:
            print(e)
            return None

    def get_all(self, user_id: int) -> list[FixedRevenue] | None:
        try:
            self.__cursor.execute('''
            SELECT r.id, r.name, r.description, r.value, r.purchase_date, r.limit_date, r.frequency, r.user_id, r.rev_cat_id
            FROM fixed_revenues r 
            WHERE user_id = %s
            ''', (user_id,))
            list_revenues = self.__cursor.fetchall()
            if len(list_revenues) == 0:
                return None
            # id |   name   |  description   | value | purchase_date | limit_date | frequency | user_id | rev_cat_id
            revenues = list(map(lambda rev: FixedRevenue(
                id=rev[0],
                name=rev[1],
                description=rev[2],
                value=rev[3],
                purchase_date=rev[4],
                limit_date=rev[5],
                frequency=Frequency(rev[6]).value,
                user_id=rev[7],
                cat=rev[8]
            ), list_revenues))
            return revenues
        except pg.Error as e:
            print(e)
            return None
