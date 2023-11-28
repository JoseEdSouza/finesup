import { FixedExpense, FixedRevenue } from "./FixedTransaction";
import Session from "../services/Session";
import Endpoints from "../utils/Endpoints";
import ServerOfflineError from "../utils/Error";


class FixedRevenueDAO {
    private get session() {
        return Session.getInstance()
    }

    private headers = {
        'accept': 'application/json',
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${this.session.token}`
    }

    async get(id: number): Promise<FixedRevenue> {
        const req: Request = new Request(`${Endpoints.FIXED_REVENUE}/${id}`, {
            method: 'GET',
            headers: this.headers
        })
        const response: Response = await fetch(req).catch(() => {
            throw new ServerOfflineError('Servidor offline, tente novamente mais tarde')
        })
        if (response.status === 404) {
            throw new Error('Item not found')
        } else if (response.status !== 200) {
            throw new Error(response.statusText)
        }
        const fixedrevenue: any = await response.json()
        return FixedRevenue.fromJson(fixedrevenue)
    }

    async getAll(): Promise<FixedRevenue[]> {
        const req: Request = new Request(Endpoints.FIXED_REVENUE_ALL, {
            method: 'GET',
            headers: this.headers
        })
        const response: Response = await fetch(req).catch(() => {
            throw new ServerOfflineError('Servidor offline, tente novamente mais tarde')
        })
        if (response.status === 404) {
            throw new Error('Item not found')
        } else if (response.status !== 200) {
            throw new Error(response.statusText)
        }
        const fixedrevenues: any = await response.json()
        return FixedRevenue.fromJsonArray(fixedrevenues)
    }

    async add(fixedrevenue: FixedRevenue): Promise<FixedRevenue> {
        const req: Request = new Request(Endpoints.FIXED_REVENUE, {
            method: 'POST',
            body: fixedrevenue.toString(),
            headers: this.headers
        })
        const response: Response = await fetch(req).catch(() => {
            throw new ServerOfflineError('Servidor offline, tente novamente mais tarde')
        })
        if (response.status !== 200) {
            throw new Error(response.statusText)
        }
        const addedFixedRevenue: any = await response.json()
        return FixedRevenue.fromJson(addedFixedRevenue)
    }

    async update(id: number, fixedrevenue: FixedRevenue): Promise<FixedRevenue> {
        const req: Request = new Request(`${Endpoints.FIXED_REVENUE}/${id}`, {
            method: 'PUT',
            body: fixedrevenue.toString(),
            headers: this.headers
        })
        const response: Response = await fetch(req).catch(() => {
            throw new ServerOfflineError('Servidor offline, tente novamente mais tarde')
        })
        if (response.status !== 200) {
            throw new Error(response.statusText)
        }
        const updatedFixedRevenue: any = await response.json()
        return FixedRevenue.fromJson(updatedFixedRevenue)
    }

    async delete(id: number): Promise<boolean> {
        const req: Request = new Request(`${Endpoints.FIXED_REVENUE}/${id}`, {
            method: 'DELETE',
            headers: this.headers
        })
        const response: Response = await fetch(req).catch(() => {
            throw new ServerOfflineError('Servidor offline, tente novamente mais tarde')
        })
        console.log(response.status, response.statusText)
        return response.status === 200
    }
}


class FixedExpenseDAO {
    private get session() {
        return Session.getInstance()
    }

    private headers = {
        'accept': 'application/json',
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${this.session.token}`
    }

    async get(id: number): Promise<FixedExpense> {
        const req: Request = new Request(`${Endpoints.FIXED_EXPENSE}/${id}`, {
            method: 'GET',
            headers: this.headers
        })
        const response: Response = await fetch(req).catch(() => {
            throw new ServerOfflineError('Servidor offline, tente novamente mais tarde')
        })
        if (response.status === 404) {
            throw new Error('Item not found')
        } else if (response.status !== 200) {
            throw new Error(response.statusText)
        }
        const fixedexpense: any = await response.json()
        return FixedExpense.fromJson(fixedexpense)
    }

    async getAll(): Promise<FixedExpense[]> {
        const req: Request = new Request(Endpoints.FIXED_EXPENSE_ALL, {
            method: 'GET',
            headers: this.headers
        })
        const response: Response = await fetch(req).catch(() => {
            throw new ServerOfflineError('Servidor offline, tente novamente mais tarde')
        })
        if (response.status === 404) {
            throw new Error('Item not found')
        } else if (response.status !== 200) {
            throw new Error(response.statusText)
        }
        const fixedexpenses: any = await response.json()
        return FixedExpense.fromJsonArray(fixedexpenses)
    }

    async add(fixedexpense: FixedExpense): Promise<FixedExpense> {
        const req: Request = new Request(Endpoints.FIXED_EXPENSE, {
            method: 'POST',
            body: fixedexpense.toString(),
            headers: this.headers
        })
        const response: Response = await fetch(req).catch(() => {
            throw new ServerOfflineError('Servidor offline, tente novamente mais tarde')
        })
        if (response.status !== 200) {
            throw new Error(response.statusText)
        }
        const addedFixedExpense: any = await response.json()
        return FixedExpense.fromJson(addedFixedExpense)
    }

    async update(id: number, fixedexpense: FixedExpense): Promise<FixedExpense> {
        const req: Request = new Request(`${Endpoints.FIXED_EXPENSE}/${id}`, {
            method: 'PUT',
            body: fixedexpense.toString(),
            headers: this.headers
        })
        const response: Response = await fetch(req).catch(() => {
            throw new ServerOfflineError('Servidor offline, tente novamente mais tarde')
        })
        if (response.status !== 200) {
            throw new Error(response.statusText)
        }
        const updatedFixedExpense: any = await response.json()
        return FixedExpense.fromJson(updatedFixedExpense)
    }

    async delete(id: number): Promise<boolean> {
        const req: Request = new Request(`${Endpoints.FIXED_EXPENSE}/${id}`, {
            method: 'DELETE',
            headers: this.headers
        })
        const response: Response = await fetch(req).catch(() => {
            throw new ServerOfflineError('Servidor offline, tente novamente mais tarde')
        })
        console.log(response.status, response.statusText)
        return response.status === 200
    }
}

export { FixedExpenseDAO, FixedRevenueDAO }