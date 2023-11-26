import { Expense, Revenue } from "./Transaction";
import Endpoints from "../utils/Endpoints";
import Session from "../services/Session";


class RevenueDAO {
    private get session() {
        return Session.getInstance()
    }

    private headers = {
        'accept': 'application/json',
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${this.session.token}`
    }

    async get(id: number): Promise<Revenue> {
        const req: Request = new Request(`${Endpoints.REVENUE}/${id}`, {
            method: 'GET',
            headers: this.headers
        })
        const response: Response = await fetch(req)
        if (response.status === 404) {
            throw new Error('Item not found')
        } else if (response.status !== 200) {
            throw new Error(response.statusText)
        }
        const revenue: any = await response.json()
        return Revenue.fromJson(revenue)
    }

    async getAll(): Promise<Revenue[]> {
        const req: Request = new Request(Endpoints.REVENUE_ALL, {
            method: 'GET',
            headers: this.headers
        })
        const response: Response = await fetch(req)
        if (response.status === 404) {
            throw new Error('Item not found')
        } else if (response.status !== 200) {
            throw new Error(response.statusText)
        }
        const revenues: any = await response.json()
        return Revenue.fromJsonArray(revenues)
    }

    async add(revenue: Revenue): Promise<Revenue> {
        const req: Request = new Request(Endpoints.REVENUE, {
            method: 'POST',
            body: revenue.toString(),
            headers: this.headers
        })
        const response: Response = await fetch(req)
        if (response.status !== 200) {
            throw new Error(response.statusText)
        }
        const addedRevenue: any = await response.json()
        return Revenue.fromJson(addedRevenue)
    }

    async update(id: number, revenue: Revenue): Promise<Revenue> {
        const req: Request = new Request(`${Endpoints.REVENUE}/${id}`, {
            method: 'PUT',
            body: revenue.toString(),
            headers: this.headers
        })
        const response: Response = await fetch(req)
        if (response.status !== 200) {
            throw new Error(response.statusText)
        }
        const updatedRevenue: any = await response.json()
        return Revenue.fromJson(updatedRevenue)
    }

    async delete(id: number): Promise<Boolean> {
        const req: Request = new Request(`${Endpoints.REVENUE}/${id}`, {
            method: 'DELETE',
            headers: this.headers
        })
        const response: Response = await fetch(req)
        console.log(response.status, response.statusText);
        return response.status === 200
    }
}

class ExpenseDAO {
    private get session() {
        return Session.getInstance()
    }

    private headers = {
        'accept': 'application/json',
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${this.session.token}`
    }

    async get(id: number): Promise<Expense> {
        const req: Request = new Request(`${Endpoints.EXPENSE}/${id}`, {
            method: 'GET',
            headers: this.headers
        })
        const response: Response = await fetch(req)
        if (response.status === 404) {
            throw new Error('Item not found')
        } else if (response.status !== 200) {
            throw new Error(response.statusText)
        }
        const expense: any = await response.json()
        return Expense.fromJson(expense)
    }

    async getAll(): Promise<Expense[]> {
        const req: Request = new Request(Endpoints.EXPENSE_ALL, {
            method: 'GET',
            headers: this.headers
        })
        const response: Response = await fetch(req)
        if (response.status === 404) {
            throw new Error('Item not found')
        } else if (response.status !== 200) {
            throw new Error(response.statusText)
        }
        const expenses: any = await response.json()
        return Expense.fromJsonArray(expenses)
    }

    async add(expense: Expense): Promise<Expense> {
        const req: Request = new Request(Endpoints.EXPENSE, {
            method: 'POST',
            body: expense.toString(),
            headers: this.headers
        })
        const response: Response = await fetch(req)
        if (response.status !== 200) {
            throw new Error(response.statusText)
        }
        const addedExpense: any = await response.json()
        return Expense.fromJson(addedExpense)
    }

    async update(id: number, expense: Expense): Promise<Expense> {
        const req: Request = new Request(`${Endpoints.EXPENSE}/${id}`, {
            method: 'PUT',
            body: expense.toString(),
            headers: this.headers
        })
        const response: Response = await fetch(req)
        if (response.status !== 200) {
            throw new Error(response.statusText)
        }
        const updatedExpense: any = await response.json()
        return Expense.fromJson(updatedExpense)
    }

    async delete(id: number): Promise<Boolean> {
        const req: Request = new Request(`${Endpoints.EXPENSE}/${id}`, {
            method: 'DELETE',
            headers: this.headers
        })
        const response: Response = await fetch(req)
        console.log(response.status, response.statusText);
        return response.status === 200
    }
}

export { ExpenseDAO, RevenueDAO }