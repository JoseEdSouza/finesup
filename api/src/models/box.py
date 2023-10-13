class Box:
    def __init__(self, box_id: int | None, user_id: int, name: str, description: str, final_value: float, actual_value: float = 0,
                 concluded: bool = False):
        self._id = box_id
        self.user_id = user_id
        self.name = name
        self.description = description
        self.final_value = final_value
        self.actual_value = actual_value
        self.concluded = concluded

    @property
    def id(self):
        return self._id

    def deposit(self, value: float) -> bool:
        # over limit value
        self.actual_value += value

        if self.actual_value >= self.final_value:
            self.concluded = True

    def withdraw(self, value: float) -> bool:
        if value <= self.actual_value:
            self.actual_value -= value
            return True
        else:
            return False
