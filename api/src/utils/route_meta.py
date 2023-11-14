from pydantic import BaseModel
from typing import TypeVar
from fastapi import APIRouter

T = TypeVar('T', bound=BaseModel)


class RouteMeta(type):
    def __new__(cls, name: str, bases: tuple, attrs: dict):
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

            key_dict = {
                'id': 'id',
                'name': 'm_name',
                'cat_id': 'category',
                'user_id': 'user'
            }

            key_path = f'{key_dict.get(key[0])}'
            for k in key[1:]:
                key_path += f'/{key_dict.get(k)}'

            if 'get' in methods:
                @router.get(f'/{route_base_name}/{key_path}')
                async def get(id: int = None, m_name: str = None,
                              category: int = None, user: int = None):
                    args = list(filter(lambda x: x is not None, [id, user, m_name, category]))
                    return dao.get(*args)
            if 'add' in methods:
                url = f'/{route_base_name}/add' + ('' if len(key) == 1 else f'/{key_dict.get(key[0])}')

                @router.post(url)
                async def post(mod: model, id: int = None, user=None):
                    args = list(filter(lambda x: x is not None, [id, user]))
                    dao.add(*args, mod) if len(args) != 0 else dao.add(mod)
                    return mod
            if 'update' in methods:
                @router.put(f'/{route_base_name}/{key_path}')
                async def put(mod: model, id: int = None, m_name: str = None,
                              category: int = None, user: int = None):
                    args = list(filter(lambda x: x is not None, [id, user, m_name, category]))
                    dao.update(*args, mod)
                    return mod
            if 'remove' in methods:
                @router.delete(f'/{route_base_name}/{key_path}')
                async def delete(id: int = None, m_name: str = None,
                                 category: int = None, user: int = None):
                    args = list(filter(lambda x: x is not None, [id, user, m_name, category]))
                    return dao.remove(*args)
            if 'get_all' in methods:
                partial_key_path = f'{key_dict.get(key[0])}'

                @router.get(f'/{route_base_name}/all/{partial_key_path}')
                async def get_all(id: int = None, m_name: str = None,
                                  category: int = None, user: int = None):
                    args = list(filter(lambda x: x is not None, [id, user, m_name, category]))
                    return dao.get_all(*args)
        else:
            raise ValueError("Missing required attributes: 'Model', 'DAO', 'Key'")
        return super().__new__(cls, name, bases, attrs)
