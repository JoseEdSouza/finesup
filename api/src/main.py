from fastapi import FastAPI
from api.src.routes.box_route import BoxRoute
from api.src.routes.user_route import UserRoute
from api.src.routes.transaction_route import RevenueRoute, ExpenseRoute
from api.src.routes.fixed_transaction_route import FixedExpenseRoute, FixedRevenueRoute
import uvicorn
import asyncio

app = FastAPI()

app.include_router(BoxRoute.router)
app.include_router(UserRoute.router)
app.include_router(RevenueRoute.router)
app.include_router(ExpenseRoute.router)
app.include_router(FixedExpenseRoute.router)
app.include_router(FixedRevenueRoute.router)


async def run_server():
    uvicorn.run(app="api.src.main:app", reload=True, host="127.0.0.1", port=9000)


if __name__ == '__main__':
    asyncio.run(run_server())