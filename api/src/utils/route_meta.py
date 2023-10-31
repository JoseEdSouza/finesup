from pydantic import BaseModel
from typing import Type, TypeVar
from fastapi import APIRouter


T = TypeVar('T', bound=BaseModel)


class RouteMeta(type):
    def __new__(cls, name: str, bases: tuple, attrs: dict):
        router = APIRouter()
        attrs['router'] = router
        if 'Model' in attrs and 'DAO' in attrs and 'Key' in attrs:
            key = attrs['Key']
            model: Type[T] = attrs['Model']
            dao = attrs['DAO']
            methods = list(filter(lambda x: callable(getattr(dao, x)) and not x.startswith('__'), dir(dao)))
            route_base_name = model.__name__.lower()

            key_dict = {
                'id': 'model_id',
                'name': 'model_name',
                'cat_id': 'model_cat_id',
                'user_id': 'model_user_id'
            }

            key_path = f'{key_dict.get(key[0])}'
            for k in key[1:]:
                key_path += f'/{key_dict.get(k)}'

            if 'get' in methods:
                @router.get(f'/{route_base_name}/{key_path}')
                async def get_model(model_id: int = None, model_name: str = None,
                                    model_cat_id: int = None, model_user_id: int = None):
                    args = list(filter(lambda x: x is not None, [model_user_id, model_id, model_name, model_cat_id]))
                    return dao.get(*args)
            if 'add' in methods:
                url = f'/{route_base_name}/add' + ('' if len(key) == 1 else f'/{key_dict.get(key[0])}')

                @router.post(url)
                async def post_add_model(mod: model, model_id: int = None, model_user_id=None):
                    args = list(filter(lambda x: x is not None, [model_id, model_user_id]))
                    dao.add(*args, mod) if len(args) != 0 else dao.add(mod)
                    return mod
            if 'update' in methods:
                @router.post(f'/{route_base_name}/update/{key_path}')
                async def post_update_model(mod: model, model_id: int = None, model_name: str = None,
                                            model_cat_id: int = None, model_user_id: int = None):
                    args = list(filter(lambda x: x is not None, [model_id, model_name, model_cat_id, model_user_id]))
                    dao.update(*args, mod)
                    return mod
            if 'remove' in methods:
                @router.get(f'/{route_base_name}/remove/{key_path}')
                async def get_remove_model(model_id: int = None, model_name: str = None,
                                           model_cat_id: int = None, model_user_id: int = None):
                    args = list(filter(lambda x: x is not None, [model_id, model_name, model_cat_id, model_user_id]))
                    return dao.remove(*args)
            if 'get_all' in methods:
                partial_key_path = f'{key_dict.get(key[0])}'

                @router.get(f'/{route_base_name}/all/{partial_key_path}')
                async def get_all_model(model_id: int = None, model_name: str = None,
                                        model_cat_id: int = None, model_user_id: int = None):
                    args = list(filter(lambda x: x is not None, [model_id, model_name, model_cat_id, model_user_id]))
                    return dao.get_all(*args)

        return super().__new__(cls, name, bases, attrs)
