import ApiSettings from "../config/ApiSettings";
import Budget from "./Budget";
import { Nullable } from "../types";

class BudgetDAO {
    async get(userId: number, categoryId: number): Promise<Nullable<Budget>> {
        const response = await fetch(`${ApiSettings.BASEURL}/budget/${userId}/${categoryId}`)
        const json = await response.json()
        return Budget.fromJson(json)
    }

    async getAll(userId: number): Promise<Budget[]> {
        const response = await fetch(`${ApiSettings.BASEURL}/budget/${userId}`)
        const json = await response.json()
        return Budget.fromJsonArray(json)
    }

    async add(budget: Budget): Promise<Budget> {
        const req = new Request(`${ApiSettings.BASEURL}/budget`, {
            method: 'POST',
            body: budget.toString(),
            headers: {
                'Content-Type': 'application/json'
            }
        })
        const response = await fetch(req)
        const json = await response.json()
        return Budget.fromJson(json)
    }

    async update(userId: number, categoryId: number, budget: Budget): Promise<Budget> {
        const req = new Request(`${ApiSettings.BASEURL}/budget/${userId}/${categoryId}`, {
            method: 'PUT',
            body: budget.toString(),
            headers: {
                'Content-Type': 'application/json'
            }
        })
        const response = await fetch(req)
        const json = await response.json()
        return Budget.fromJson(json)
    }

    async delete(userId: number, categoryId: number): Promise<Boolean> {
        const req = new Request(`${ApiSettings.BASEURL}/budget/${userId}/${categoryId}`, {
            method: 'DELETE'
        })
        const response = await fetch(req)
        return response.status === 200
    }
}

export default BudgetDAO