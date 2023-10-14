from enum import Enum


class DBSettings(Enum):
    HOST = 'localhost'
    DBNAME = 'finesup'
    USER = 'postgres'
    PASSWORD = 'Oppenheimer'
    URL = f'postgresql+psycopg2://{USER}:{PASSWORD}@{HOST}/{DBNAME}'
