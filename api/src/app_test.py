from fastapi import FastAPI
from api.src.routes.box_route import BoxRoute
from api.src.routes.user_route import UserRoute
import uvicorn
import asyncio

app = FastAPI()

app.include_router(BoxRoute.router)
app.include_router(UserRoute.router)


async def run_server():
    uvicorn.run(app="api.src.app_test:app", reload=True, host="127.0.0.1", port=9000)


if __name__ == '__main__':
    asyncio.run(run_server())
