import { CreateBudgetHandler, ValidateBudgetFinalValue, ValidateBudgetCategory, BudgetBaseHandler } from "../handler/BudgetHandler";
import Budget from "../models/Budget";
import BudgetDAO from "../models/BudgetDAO";

class BudgetController {
    private dao: BudgetDAO
    private handler: BudgetBaseHandler
    constructor() {
        this.dao = new BudgetDAO()
        this.handler = new CreateBudgetHandler()
            .setNextHandler(new ValidateBudgetFinalValue())
            .setNextHandler(new ValidateBudgetCategory())
    }

    createBudget(categoryId: number, renewalDate: Date, actualValue: number, finalValue: number,): Budget {
        const budget = new Budget(categoryId, new Date(renewalDate), finalValue, 0, actualValue)
        this.handler.handle(budget)
        return budget
    }
    async get(categoryId: number): Promise<Budget> {
        return await this.dao.get(categoryId)
    }
    async getAll(): Promise<Budget[]> {
        return await this.dao.getAll()
    }
    async add(categoryId: number, actual_value: number, final_value: number, renewalDate: Date): Promise<Budget> {
        return await this.dao.add(this.createBudget(categoryId, renewalDate, actual_value, final_value))
    }
    async update(categoryId: number, budget: Budget): Promise<Budget> {
        this.handler.handle(budget)
        return await this.dao.update(categoryId, budget)
    }
    async remove(categoryId: number): Promise<Budget> {
        return await this.dao.delete(categoryId)
    }
}
export default BudgetController