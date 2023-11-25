from time import time
import jwt
from pydantic import BaseModel
from api.src.config.env_config import ENV_CONFIG


class Auth:
    _SECRET = ENV_CONFIG.get('SECRET')
    _ALGORITHM = ENV_CONFIG.get('ALGORITHM')

    class AuthResponse(BaseModel):
        access_token: str

    @staticmethod
    def token_response(token: str):
        return {
            "access_token": token
        }

    @staticmethod
    def sign(id: int, email: str, name: str):
        payload = {
            "user_id": id,
            "user_email": email,
            "user_name": name,
            "expiry": time() + 3600
        }
        token = jwt.encode(payload, Auth._SECRET, algorithm=Auth._ALGORITHM)
        return Auth.AuthResponse(access_token=token)

    @staticmethod
    def decode(token: str):
        try:
            decode_token = jwt.decode(token, Auth._SECRET, algorithms=Auth._ALGORITHM)
            if decode_token["expiry"] >= time():
                return decode_token
        except jwt.DecodeError as e:
            print(e)
        return None
