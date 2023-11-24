from pathlib import Path
from decouple import Config, RepositoryEnv

ENV_CONFIG = Config(RepositoryEnv(Path(__file__).parent / '.env'))
