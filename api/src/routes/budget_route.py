from api.src.models.budgetDAO import BudgetDAOImp
from api.src.models.budget import Budget
from api.src.utils.route_meta import RouteMeta


class BudgetRoute(metaclass=RouteMeta):
    DAO = BudgetDAOImp()
    Model = Budget
    Key = ('user_id', 'cat_id')
