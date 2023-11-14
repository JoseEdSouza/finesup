from api.src.utils.route_meta import RouteMeta
from api.src.models.userDAO import UserDAOImp
from api.src.models.user import User


class UserRoute(metaclass=RouteMeta):

    DAO = UserDAOImp()
    Model = User
    Key = ('id',)

