from api.src.utils.route_meta import RouteMeta
from api.src.models.fixed_transactionDAO import FixedExpenseDAOImp, FixedRevenueDAOImp
from api.src.models.fixed_transaction import FixedExpense, FixedRevenue


class FixedExpenseRoute(metaclass=RouteMeta):

    DAO = FixedExpenseDAOImp()
    Model = FixedExpense
    Key = ('id',)


class FixedRevenueRoute(metaclass=RouteMeta):

    DAO = FixedRevenueDAOImp()
    Model = FixedRevenue
    Key = ('id',)
