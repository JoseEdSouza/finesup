from time import time
import jwt
from api.src.config.env_config import ENV_CONFIG


class Auth:
    _SECRET = ENV_CONFIG.get('SECRET')
    _ALGORITHM = ENV_CONFIG.get('ALGORITHM')

    @staticmethod
    def _token_response(token: str):
        return {
            "access_token": token
        }

    @staticmethod
    def sign(email: str):
        payload = {
            "user_email": email,
            "expiry": time() + 3600
        }
        token = jwt.encode(payload, Auth._SECRET, algorithm=Auth._ALGORITHM)
        return Auth._token_response(token)

    @staticmethod
    def decode(token: str):
        try:
            decode_token = jwt.decode(token, Auth._SECRET, algorithms=Auth._ALGORITHM)
            return decode_token if decode_token["expires"] >= time() else None
        except jwt.DecodeError as e:
            print(e)
        return {}
