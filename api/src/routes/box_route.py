from api.src.utils.route_meta import RouteMeta
from api.src.models.boxDAO import BoxDAOImp
from api.src.models.box import Box


class BoxRoute(metaclass=RouteMeta):

    DAO = BoxDAOImp()
    Model = Box
    Key = ('user_id', 'name')
