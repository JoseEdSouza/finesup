from fastapi import Request, HTTPException
from fastapi.security import HTTPBearer, HTTPAuthorizationCredentials


class Bearer(HTTPBearer):
    def __init__(self, auto_error: bool = False):
        super(Bearer, self).__init__(auto_error=auto_error)

    async def __call__(self, request: Request):
        credentials: HTTPAuthorizationCredentials = await super(Bearer, self).__call__(request)
        if not credentials or credentials.scheme != 'Bearer':
            raise HTTPException(403, 'Invalid or Expired Token')
        return credentials.credentials
