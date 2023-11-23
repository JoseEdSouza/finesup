import ApiSettings from "../config/ApiSettings";
import { Expense, Revenue } from "./Transaction";
import { Nullable } from "../types"


class RevenueDAO {

    async get(id: number): Promise<Nullable<Revenue>> {
        const req: Request = new Request(`${ApiSettings.BASEURL}/revenue/${id}`)
        const response: Response = await fetch(req)
        if (response.status !== 200) {
            throw new Error('Revenue not found')
        }
        const revenue: any = await response.json()
        return Revenue.fromJson(revenue)
    }

    async getAll(userId: number): Promise<Revenue[]> {
        const req: Request = new Request(`${ApiSettings.BASEURL}/all/revenue/${userId}`)
        const response: Response = await fetch(req)
        if (response.status !== 200) {
            throw new Error('user not found')
        }
        const revenues: any = await response.json()
        return Revenue.fromJsonArray(revenues)
    }

    async add(revenue: Revenue): Promise<Nullable<Revenue>> {
        const req: Request = new Request(`${ApiSettings.BASEURL}/revenue`, {
            method: 'POST',
            body: revenue.toString(),
            headers: { 'Content-Type': 'application/json' }
        })
        const response: Response = await fetch(req)
        if (response.status !== 200) {
            throw new Error(response.statusText)
        }
        const addedRevenue: any = await response.json()
        return Revenue.fromJson(addedRevenue)
    }

    async update(id: number, revenue: Revenue): Promise<Nullable<Revenue>> {
        const req: Request = new Request(`${ApiSettings.BASEURL}/revenue/${id}`, {
            method: 'PUT',
            body: revenue.toString(),
            headers: { 'Content-Type': 'application/json' }
        })
        const response: Response = await fetch(req)
        if (response.status !== 200) {
            throw new Error(response.statusText)
        }
        const updatedRevenue: any = await response.json()
        return Revenue.fromJson(updatedRevenue)
    }

    async delete(id: number): Promise<Boolean> {
        const req: Request = new Request(`${ApiSettings.BASEURL}/revenue/${id}`, {
            method: 'DELETE'
        })
        const response: Response = await fetch(req)
        console.log(response.status, response.statusText);
        return response.status === 200
    }
}

class ExpenseDAO {

    async get(id: number): Promise<Nullable<Expense>> {
        const req: Request = new Request(`${ApiSettings.BASEURL}/expense/${id}`)
        const response: Response = await fetch(req)
        if (response.status !== 200) {
            throw new Error('Expense not found')
        }
        const expense: any = await response.json()
        return Expense.fromJson(expense)
    }

    async getAll(userId: number): Promise<Expense[]> {
        const req: Request = new Request(`${ApiSettings.BASEURL}/all/expense/${userId}`)
        const response: Response = await fetch(req)
        if (response.status !== 200) {
            throw new Error('user not found')
        }
        const expenses: any = await response.json()
        return Expense.fromJsonArray(expenses)
    }

    async add(expense: Expense): Promise<Nullable<Expense>> {
        const req: Request = new Request(`${ApiSettings.BASEURL}/expense`, {
            method: 'POST',
            body: expense.toString(),
            headers: { 'Content-Type': 'application/json' }
        })
        const response: Response = await fetch(req)
        if (response.status !== 200) {
            throw new Error(response.statusText)
        }
        const addedExpense: any = await response.json()
        return Expense.fromJson(addedExpense)
    }

    async update(id: number, expense: Expense): Promise<Nullable<Expense>> {
        const req: Request = new Request(`${ApiSettings.BASEURL}/expense/${id}`, {
            method: 'PUT',
            body: expense.toString(),
            headers: { 'Content-Type': 'application/json' }
        })
        const response: Response = await fetch(req)
        if (response.status !== 200) {
            throw new Error(response.statusText)
        }
        const updatedExpense: any = await response.json()
        return Expense.fromJson(updatedExpense)
    }

    async delete(id: number): Promise<Boolean> {
        const req: Request = new Request(`${ApiSettings.BASEURL}/expense/${id}`, {
            method: 'DELETE'
        })
        const response: Response = await fetch(req)
        console.log(response.status, response.statusText);
        return response.status === 200
    }
}

export { ExpenseDAO, RevenueDAO }