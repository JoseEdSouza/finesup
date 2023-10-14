class Box:
    def __init__(self, user_id: int | None, name: str, description: str, final_value: float, actual_value: float = 0,
                 concluded: bool = False):
        self._user_id = user_id
        self.name = name
        self.description = description
        self.final_value = final_value
        self.actual_value = actual_value
        self.concluded = concluded

    @property
    def get_user_id(self):
        return self._user_id

    def deposit(self, value: float):
        # over limit value
        self.actual_value += value

        if not self.concluded and self.actual_value >= self.final_value:
            self.concluded = True
        return self

    def withdraw(self, value: float):
        self.actual_value -= value
        if self.actual_value < 0:
            self.actual_value = 0
        if self.concluded and self.actual_value < self.final_value:
            self.concluded = False
        return self

    def __str__(self):
        return f"Box(user_id={self._user_id}, name='{self.name}', description='{self.description}', " \
               f"final_value={self.final_value}, actual_value={self.actual_value}, concluded={self.concluded})"
