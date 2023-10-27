import sqlalchemy as sqla
import psycopg2 as pg
from api.src.db.settings import DBSettings
from api.src.utils.singleton import Singleton


class Database(metaclass=Singleton):
    # todo - connection pool
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

    @property
    def connection(self) -> pg._psycopg.connection | None:
        return self._conn

    @property
    def engine(self) -> sqla.Engine | None:
        return self._eng
