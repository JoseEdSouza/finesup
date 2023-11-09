class Box:
    def __init__(self, user_id: int | None, name: str, description: str, final_value: float,
                 actual_value: float = 0, concluded: bool = False):
        self._user_id = user_id
        self._name = name
        self.description = description
        self.final_value = final_value
        self.actual_value = actual_value
        self.concluded = concluded

    @property
    def user_id(self) -> int:
        return self._user_id

    @property
    def name(self) -> str:
        return self._name


    def __str__(self):
        return f"Box(user_id={self._user_id}, name='{self.name}', description='{self.description}',"\
               f" final_value={self.final_value}, actual_value={self.actual_value}, concluded={self.concluded})"
