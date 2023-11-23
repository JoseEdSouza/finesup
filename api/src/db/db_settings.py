from enum import Enum
from api.src.config.env_config import ENV_CONFIG


class DBSettings(Enum):
    HOST = 'localhost'
    DBNAME = 'finesup'
    USER = ENV_CONFIG.get('DB_USER')
    PASSWORD = ENV_CONFIG.get('DB_PASSWORD')
    URL = f'postgresql+psycopg2://{USER}:{PASSWORD}@{HOST}/{DBNAME}'
