import sqlalchemy as sqla
import psycopg2 as pg
from psycopg2.extensions import connection
from sqlalchemy.engine import Engine
from api.src.db.db_settings import DBSettings
from api.src.utils.singleton import Singleton


class Database(metaclass=Singleton):
    _eng = None
    _conn = None

    def __init__(self):
        self._eng = sqla.create_engine(url=DBSettings.URL.value)
        self._conn = pg.connect(
            host=DBSettings.HOST.value,
            dbname=DBSettings.DBNAME.value,
            user=DBSettings.USER.value,
            password=DBSettings.PASSWORD.value
        )
        self._conn.autocommit = False

    @property
    def connection(self) -> connection:
        return self._conn

    @property
    def engine(self) -> Engine:
        return self._eng
