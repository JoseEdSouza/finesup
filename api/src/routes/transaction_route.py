from api.src.utils.route_meta import RouteMeta
from api.src.models.transactionDAO import ExpenseDAOImp, RevenueDAOImp
from api.src.models.transaction import Expense, Revenue


class ExpenseRoute(metaclass=RouteMeta):

    DAO = ExpenseDAOImp()
    Model = Expense
    Key = ('id',)


class RevenueRoute(metaclass=RouteMeta):

    DAO = RevenueDAOImp()
    Model = Revenue
    Key = ('id',)
