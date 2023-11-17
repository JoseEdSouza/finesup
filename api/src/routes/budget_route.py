from api.src.models.budgetDAO import BudgetDAOImp
from api.src.models.budget import Budget
from fastapi import APIRouter, HTTPException

router = APIRouter()
dao = BudgetDAOImp()

@router.get("/api/budget/{user_id}/{cat}")
async def get(user_id: int, cat: int) -> Budget:
    ret = dao.get(user_id, cat)
    if ret is None:
        raise HTTPException(status_code=404, detail="Item not found")
    return ret


@router.post("/api/budget")
async def post(budget: Budget):
    added = dao.add(budget)
    print(added)
    if not added:
        raise HTTPException(status_code=404, detail="Item not found or already exists")
    return budget


@router.delete("/api/budget/{user_id}/{cat}")
async def delete(user_id: int, cat: int):
    deleted = dao.remove(user_id, cat)
    if not deleted:
        raise HTTPException(status_code=404, detail="Item not found")
    return deleted


@router.put("/api/budget/{user_id}/{cat}")
async def put(user_id: int, cat: int, budget: Budget):
    updated = dao.update(user_id, cat, budget)
    if dao.get(user_id, cat) is None:
        raise HTTPException(status_code=404, detail="Item not found")
    updated = dao.update(user_id, cat, budget)
    if not updated:
        raise HTTPException(status_code=404, detail="Internal Server Error")
    return budget


@router.get("/api/budget/{user_id}")
async def get_all(user_id: int):
    ret = dao.get_all(user_id)
    if ret is None:
        raise HTTPException(status_code=404, detail="Item not found")
    return ret

