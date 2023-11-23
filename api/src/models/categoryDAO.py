import psycopg2 as pg
from abc import ABC, abstractmethod
from api.src.db.database import Database
from api.src.models.category import Category, ExpenseCategory, RevenueCategory


class CategoryDAO(ABC):
    @abstractmethod
    def add(self, category: Category) -> bool:
        pass

    @abstractmethod
    def update(self, cat_id: int, category: Category) -> bool:
        pass

    @abstractmethod
    def remove(self, cat_id: int) -> bool:
        pass

    @abstractmethod
    def get(self, cat_id: int) -> Category | None:
        pass

    @abstractmethod
    def get_all(self) -> list[Category] | None:
        pass


class ExpenseCategoryDAOImp(CategoryDAO):
    __conn = None
    __cursor = None

    def __init__(self):
        self.__db = Database()
        self.__conn = self.__db.connection
        self.__cursor = self.__conn.cursor()

    def __save(self):
        self.__conn.commit()

    def add(self, category: ExpenseCategory) -> bool:
        values = (category.name,)
        try:
            self.__cursor.execute('''
            INSERT INTO expense_categories (name)
            VALUES (%s)
            ''', values)

            self.__save()

            return True
        except pg.Error as e:
            print(e)
            return False

    def update(self, cat_id: int, category: ExpenseCategory) -> bool:
        values = (category.name, cat_id)
        try:
            self.__cursor.execute('''
            UPDATE expense_categories
            SET name = %s
            WHERE id = %s
            ''', values)
            self.__save()
            return True
        except pg.Error as e:
            print(e)
            return False

    def remove(self, cat_id: int) -> bool:
        try:
            self.__cursor.execute('''
            DELETE FROM expense_categories WHERE id=%s
            ''', (cat_id,))

            self.__save()

            return True
        except pg.Error as e:
            print(e)
            return False

    def get(self, cat_id: int) -> ExpenseCategory | None:
        try:
            self.__cursor.execute('''
            SELECT * FROM expense_categories
            WHERE id = %s
            ''', (cat_id,))
            cat = self.__cursor.fetchone()
            return None if cat is None else ExpenseCategory(id=cat[0], name=cat[1])
        except pg.Error as e:
            print(e)
            return None

    def get_all(self) -> list[ExpenseCategory] | None:
        try:
            self.__cursor.execute('SELECT * FROM expense_categories')
            cats = self.__cursor.fetchall()
            if len(cats) == 0:
                return None
            return list(map(lambda c: ExpenseCategory(id=c[0], name=c[1]), cats))
        except pg.Error as e:
            print(e)
            return None


class RevenueCategoryDAOImp(CategoryDAO):
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

    def add(self, category: RevenueCategory) -> bool:
        values = (category.name,)
        try:
            self.__cursor.execute('''
            INSERT INTO revenue_categories (name)
            VALUES (%s)
            ''', values)
            self.__save()
            return True
        except pg.Error as e:
            print(e)
            self.__rollback()
            return False

    def update(self, cat_id: int, category: RevenueCategory) -> bool:
        values = (category.name, cat_id)
        try:
            self.__cursor.execute('''
            UPDATE revenue_categories
            SET name = %s
            WHERE id = %s
            ''', values)
            self.__save()
            return True
        except pg.Error as e:
            print(e)
            self.__rollback()
            return False

    def remove(self, cat_id: int) -> bool:
        try:
            self.__cursor.execute('''
            DELETE FROM revenue_categories WHERE id=%s
            ''', (cat_id,))
            self.__save()
            return True
        except pg.Error as e:
            print(e)
            self.__rollback()
            return False

    def get(self, cat_id: int) -> RevenueCategory | None:
        try:
            self.__cursor.execute('''
            SELECT * FROM revenue_categories
            WHERE id = %s
            ''', (cat_id,))
            cat = self.__cursor.fetchone()
            return None if cat is None else RevenueCategory(id=cat[0], name=cat[1])
        except pg.Error as e:
            print(e)
            return None

    def get_all(self) -> list[RevenueCategory] | None:
        try:
            self.__cursor.execute('SELECT * FROM revenue_categories')
            cats = self.__cursor.fetchall()
            if len(cats) == 0:
                return None
            return list(map(lambda c: RevenueCategory(id=c[0], name=c[1]), cats))
        except pg.Error as e:
            print(e)
            return None
