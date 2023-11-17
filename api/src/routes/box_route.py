from api.src.models.boxDAO import BoxDAOImp
from api.src.models.box import Box
from fastapi import APIRouter, HTTPException

router = APIRouter()
dao = BoxDAOImp()


@router.get("/api/box/{user_id}/{cat}")
async def get(user_id: int, name: str):
    ret = dao.get(user_id, name)
    if ret is None:
        raise HTTPException(status_code=404, detail="Item not found")
    return ret


@router.post("/api/box")
async def post(box: Box):
    added = dao.add(box)
    print(added)
    if not added:
        raise HTTPException(status_code=404, detail="Item not found or already exists")
    return box


@router.delete("/api/box/{user_id}/{cat}")
async def delete(user_id: int, name: str):
    deleted = dao.remove(user_id, name)
    if not deleted:
        raise HTTPException(status_code=404, detail="Item not found")
    return deleted


@router.put("/api/box/{user_id}/{cat}")
async def put(user_id: int, name: str, box:Box):
    if dao.get(user_id, name) is None:
        raise HTTPException(status_code=404, detail="Item not found")
    updated = dao.update(user_id, name, box)
    if not updated:
        raise HTTPException(status_code=404, detail="Internal Server Error")
    return box


@router.get("/api/box/{user_id}")
async def get_all(user_id: int):
    ret = dao.get_all(user_id)
    if ret is None:
        raise HTTPException(status_code=404, detail="Item not found")
    return ret

