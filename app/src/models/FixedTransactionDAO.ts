import ApiSettings from "../config/ApiSettings";
import { FixedExpense, FixedRevenue } from "./FixedTransaction";
import { Nullable } from "../types"


class FixedRevenueDAO {

    async get(id: number): Promise<Nullable<FixedRevenue>> {
        const req: Request = new Request(`${ApiSettings.BASEURL}/fixedrevenue/${id}`)
        const response: Response = await fetch(req)
        if (response.status !== 200) {
            throw new Error('FixedRevenue not found')
        }
        const fixed_revenue: any = await response.json()
        return FixedRevenue.fromJson(fixed_revenue)
    }

    async getAll(userId: number): Promise<FixedRevenue[]> {
        const req: Request = new Request(`${ApiSettings.BASEURL}/all/fixedrevenue/${userId}`)
        const response: Response = await fetch(req)
        if (response.status !== 200) {
            throw new Error('user not found')
        }
        const fixed_revenues: any = await response.json()
        return FixedRevenue.fromJsonArray(fixed_revenues)
    }

    async add(fixed_revenue: FixedRevenue): Promise<Nullable<FixedRevenue>> {
        const req: Request = new Request(`${ApiSettings.BASEURL}/fixedrevenue`, {
            method: 'POST',
            body: fixed_revenue.toString(),
            headers: { 'Content-Type': 'application/json' }
        })
        const response: Response = await fetch(req)
        if (response.status !== 200) {
            throw new Error(response.statusText)
        }
        const addedFixedRevenue: any = await response.json()
        return FixedRevenue.fromJson(addedFixedRevenue)
    }

    async update(id: number, fixed_revenue: FixedRevenue): Promise<Nullable<FixedRevenue>> {
        const req: Request = new Request(`${ApiSettings.BASEURL}/fixedrevenue/${id}`, {
            method: 'PUT',
            body: fixed_revenue.toString(),
            headers: { 'Content-Type': 'application/json' }
        })
        const response: Response = await fetch(req)
        if (response.status !== 200) {
            throw new Error(response.statusText)
        }
        const updatedFixedRevenue: any = await response.json()
        return FixedRevenue.fromJson(updatedFixedRevenue)
    }

    async delete(id: number): Promise<Boolean> {
        const req: Request = new Request(`${ApiSettings.BASEURL}/fixedrevenue/${id}`, {
            method: 'DELETE'
        })
        const response: Response = await fetch(req)
        console.log(response.status, response.statusText)
        return response.status === 200
    }
}

class FixedExpenseDAO {

    async get(id: number): Promise<Nullable<FixedExpense>> {
        const req: Request = new Request(`${ApiSettings.BASEURL}/fixedexpense/${id}`)
        const response: Response = await fetch(req)
        if (response.status !== 200) {
            throw new Error('FixedExpense not found')
        }
        const fixed_expense: any = await response.json()
        return FixedExpense.fromJson(fixed_expense)
    }

    async getAll(userId: number): Promise<FixedExpense[]> {
        const req: Request = new Request(`${ApiSettings.BASEURL}/all/fixedexpense/${userId}`)
        const response: Response = await fetch(req)
        if (response.status !== 200) {
            throw new Error('user not found')
        }
        const fixed_expenses: any = await response.json()
        return FixedExpense.fromJsonArray(fixed_expenses)
    }

    async add(fixed_expense: FixedExpense): Promise<Nullable<FixedExpense>> {
        const req: Request = new Request(`${ApiSettings.BASEURL}/fixedexpense`, {
            method: 'POST',
            body: fixed_expense.toString(),
            headers: { 'Content-Type': 'application/json' }
        })
        const response: Response = await fetch(req)
        if (response.status !== 200) {
            throw new Error(response.statusText)
        }
        const addedFixedExpense: any = await response.json()
        return FixedExpense.fromJson(addedFixedExpense)
    }

    async update(id: number, fixed_expense: FixedExpense): Promise<Nullable<FixedExpense>> {
        const req: Request = new Request(`${ApiSettings.BASEURL}/fixedexpense/${id}`, {
            method: 'PUT',
            body: fixed_expense.toString(),
            headers: { 'Content-Type': 'application/json' }
        })
        const response: Response = await fetch(req)
        if (response.status !== 200) {
            throw new Error(response.statusText)
        }
        const updatedFixedExpense: any = await response.json()
        return FixedExpense.fromJson(updatedFixedExpense)
    }

    async delete(id: number): Promise<Boolean> {
        const req: Request = new Request(`${ApiSettings.BASEURL}/fixedexpense/${id}`, {
            method: 'DELETE'
        })
        const response: Response = await fetch(req)
        console.log(response.status, response.statusText)
        return response.status === 200
    }
}

export { FixedExpenseDAO, FixedRevenueDAO }