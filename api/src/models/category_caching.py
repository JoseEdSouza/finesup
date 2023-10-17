from datetime import datetime
from api.src.models.categoryDAO import CategoryDAO
from api.src.utils.caching import Caching
from api.src.models.category import Category, ExpenseCategory, RevenueCategory


class CategoryCaching(Caching):
    _values: dict[int, Category]
    _DAO: CategoryDAO

    def __init__(self, category_dao: CategoryDAO):
        super().__init__(category_dao)

    def get(self, cat_id: int) -> CategoryDAO | None:
        return self._update()._values.get(cat_id)

    def _is_updatable(self) -> bool:
        return self._last_update is None or (self._last_update - datetime.now()).days > 0

    def _update(self):
        if self._is_updatable():
            self._last_update = datetime.now()
            response = self._DAO.get_all()
            if response is None:
                return self
            for value in response:
                self._values[value.id] = value
        return self


class ExpenseCategoryCaching(CategoryCaching):
    _values: dict[int, ExpenseCategory]

    def get(self, cat_id) -> ExpenseCategory | None:
        return super().get(cat_id)
