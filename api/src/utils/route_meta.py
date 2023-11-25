from pydantic import BaseModel
from typing import TypeVar
from fastapi import APIRouter, HTTPException, Header, Depends

from api.src.auth.auth import Auth
from api.src.auth.bearer import Bearer


class RouteMeta(type):
    def __new__(cls, name: str, bases: tuple, attrs: dict):
        T = TypeVar('T', bound=BaseModel)
        router = APIRouter()
        attrs['router'] = router
        if (all(key in attrs for key in ['Model', 'DAO', 'Key'])
                and attrs['Model'] is not None and attrs['DAO'] is not None and attrs['Key'] is not None):
            # Your code here
            key = attrs['Key']
            model: T = attrs['Model']
            dao = attrs['DAO']
            methods = list(filter(lambda x: callable(getattr(dao, x)) and not x.startswith('__'), dir(dao)))
            route_base_name = model.__name__.lower()
            tag = route_base_name

            key_dict = {
                'id': 'id',
                'name': 'm_name',
                'cat_id': 'category',
            }

            key_path = tuple([k for k in key if k != 'user_id'])
            key_path_without_user = f'{{{key_dict.get(key_path[0])}}}'
            for k in key_path[1:]:
                key_path_without_user += f'/{{{key_dict.get(k)}}}'

            if 'get' in methods:
                @router.get(f'/api/{route_base_name}/{key_path_without_user}',
                            dependencies=[Depends(Bearer())], tags=[tag])
                async def get(id: int = None, m_name: str = None,
                              category: int = None, authorization: str = Header(None)):
                    user = None
                    if 'user_id' in key:
                        token = authorization.split(" ")[1]
                        payload = Auth.decode(token)
                        if payload is None:
                            raise HTTPException(status_code=401, detail="Unauthorized token")
                        user = payload['user_id']
                    args = list(filter(lambda x: x is not None, [id, user, m_name, category]))
                    ret = dao.get(*args)
                    if ret is None:
                        raise HTTPException(status_code=404, detail="Item not found")
                    return ret
            if 'add' in methods:
                url = f'/api/{route_base_name}'

                @router.post(url, dependencies=[Depends(Bearer())], tags=[tag])
                async def post(mod: model, authorization: str = Header(None)):
                    token = authorization.split(" ")[1]
                    payload = Auth.decode(token)
                    if payload is None:
                        raise HTTPException(status_code=401, detail="Unauthorized token")
                    mod.user_id = payload['user_id']
                    added = dao.add(mod)
                    if added is None:
                        raise HTTPException(status_code=404, detail="Item not found or already exists")
                    return added
            if 'update' in methods:
                @router.put(f'/api/{route_base_name}/{key_path_without_user}', dependencies=[Depends(Bearer())],
                            tags=[tag])
                async def put(mod: model, id: int = None, m_name: str = None,
                              category: int = None, authorization: str = Header(None)):
                    user = None
                    if 'user_id' in key:
                        token = authorization.split(" ")[1]
                        payload = Auth.decode(token)
                        if payload is None:
                            raise HTTPException(status_code=401, detail="Unauthorized token")
                        user = payload['user_id']
                    args = list(filter(lambda x: x is not None, [id, user, m_name, category]))
                    if dao.get(*args) is None:
                        raise HTTPException(status_code=404, detail="Item not found")
                    updated = dao.update(*args, mod)
                    if updated is None:
                        raise HTTPException(status_code=404, detail="Already Exists")
                    return updated
            if 'remove' in methods:
                @router.delete(f'/api/{route_base_name}/{key_path_without_user}',
                               dependencies=[Depends(Bearer())], tags=[tag])
                async def delete(id: int = None, m_name: str = None,
                                 category: int = None, authorization: str = Header(None)):
                    user = None
                    if 'user_id' in key:
                        token = authorization.split(" ")[1]
                        payload = Auth.decode(token)
                        if payload is None:
                            raise HTTPException(status_code=401, detail="Unauthorized token")
                        user = payload['user_id']
                    args = list(filter(lambda x: x is not None, [id, user, m_name, category]))
                    if dao.get(*args) is None:
                        raise HTTPException(status_code=404, detail="Item not found")
                    return dao.remove(*args)
            if 'get_all' in methods:

                @router.get(f'/api/all/{route_base_name}', dependencies=[Depends(Bearer())], tags=[tag])
                async def get_all(authorization: str = Header(None)):
                    token = authorization.split(" ")[1]
                    payload = Auth.decode(token)
                    if payload is None:
                        raise HTTPException(status_code=401, detail="Unauthorized token")
                    ret = dao.get_all(payload['user_id'])
                    if ret is None:
                        raise HTTPException(status_code=404, detail="Item not found")
                    return ret
        else:
            raise ValueError("Missing required attributes: 'Model', 'DAO', 'Key'")
        return super().__new__(cls, name, bases, attrs)
