import Budget from "./Budget";
import Session from "../services/Session";
import Endpoints from "../utils/Endpoints";

class BudgetDAO {
    private headers = {
        'accept': 'application/json',
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${this.session.token}`
    }
    private get session() {
        return Session.getInstance()
    }

    async get(cat_id:number): Promise<Budget> {
        const req: Request = new Request(`${Endpoints.BUDGET}/${cat_id}`, {
            method: 'GET',
            headers: this.headers

        })
        const response: Response = await fetch(req)
        if (response.status === 404) {
            throw new Error('Item not found')
        } else if (response.status !== 200) {
            throw new Error(response.statusText)
        }
        const budget: any = await response.json()
        return Budget.fromJson(budget)
    }

    async getAll(): Promise<Budget[]> {
        const req: Request = new Request(Endpoints.BUDGET_ALL, {
            method: 'GET',
            headers: this.headers
        })
        const response: Response = await fetch(req)
        if (response.status === 404) {
            throw new Error('Item not found')
        } else if (response.status !== 200) {
            throw new Error(response.statusText)
        }
        const budgets: any = await response.json()
        return Budget.fromJsonArray(budgets)
    } 

    async add(budget: Budget): Promise<Budget> {
        const req: Request = new Request(Endpoints.BUDGET, {
            method: 'POST',
            body: budget.toString(),
            headers: this.headers
        })
        const response: Response = await fetch(req)
        
        if (response.status !== 200) {
            throw new Error(response.statusText)
        }
        const addedBudget: any = await response.json()
        return Budget.fromJson(addedBudget)
    }

    async update(cat_id: number, budget: Budget): Promise<Budget> {
        const req: Request = new Request(`${Endpoints.BUDGET}/${cat_id}`, {
            method: 'PUT',
            body: budget.toString(),
            headers: this.headers
        })
        const response: Response = await fetch(req)
        if (response.status !== 200) {
            throw new Error(response.statusText)
        }
        const updatedBudget: any = await response.json()
        return Budget.fromJson(updatedBudget)
    }

    async delete(cat_id: number): Promise<Budget> {
        const req: Request = new Request(`${Endpoints.BUDGET}/${cat_id}`, {
            method: 'DELETE',
            headers: this.headers
        })
        const response: Response = await fetch(req)
        if (response.status !== 200) {
            throw new Error(response.statusText)
        }
        const deletedBudget: any = await response.json()
        return Budget.fromJson(deletedBudget)
    }

}

export default BudgetDAO