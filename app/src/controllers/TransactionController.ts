import Frequency from "../utils/Frequency";
import ExpenseController from "./ExpenseController";
import FixedExpenseController from "./FixedExpenseController";
import FixedRevenueController from "./FixedRevenueController";
import RevenueController from "./RevenueController";
import Collection from "../utils/Collection";
import { Expense, Revenue, Transaction } from "../models/Transaction";
import { FixedExpense, FixedRevenue } from "../models/FixedTransaction";

class TransactionController {
    private revController: RevenueController
    private expController: ExpenseController
    private fxExController: FixedExpenseController
    private fxRevController: FixedRevenueController

    constructor() {
        this.revController = new RevenueController()
        this.expController = new ExpenseController()
        this.fxExController = new FixedExpenseController()
        this.fxRevController = new FixedRevenueController()
    }

    private async addTransaction(
        controller: RevenueController | ExpenseController | FixedExpenseController | FixedRevenueController,
        name: string,
        description: string,
        value: number,
        purchase_date: Date,
        categoryId: number,
        userId: number,
        id: number,
        limitDate?: Date,
        frequency?: Frequency) {
        if (controller instanceof FixedExpenseController || controller instanceof FixedRevenueController) {
            return await controller.add(name, description, value, purchase_date, limitDate ?? new Date("0001-01-01"),id,userId,categoryId,frequency);
        } else {
            return await controller.add(name, description, value, purchase_date, categoryId, id);
        }
    }

    public async add(
        isRevenue: boolean,
        fixed: boolean,
        name: string,
        description: string,
        value: number,
        purchase_date: Date,
        categoryId: number,
        userId: number,
        id: number,
        limitDate?: Date,
        frequency?: Frequency
    ) {
        let controller
        if (fixed) {
            controller = isRevenue ? this.fxRevController : this.fxExController;
        } else {
            controller = isRevenue ? this.revController : this.expController;
        }

        return await this.addTransaction(controller, name, description, value, purchase_date, categoryId, userId, id, limitDate, frequency);
    }

    async getRevenueCollection(): Promise<Collection<Revenue>> {
        return Collection.from(await this.revController.getAll())
    }

    async getExpenseCollection(): Promise<Collection<Expense>> {
        return Collection.from(await this.expController.getAll())
    }

    async getFixedExpenseCollection(): Promise<Collection<FixedExpense>> {
        return Collection.from(await this.fxExController.getAll())
    }

    async getFixedRevenueCollection(): Promise<Collection<FixedRevenue>> {
        return Collection.from(await this.fxRevController.getAll())
    }

    async getTransactionCollection(): Promise<Collection<Transaction>> {
        const rev = await this.revController.getAll()
        const exp = await this.expController.getAll()
        return Collection.from([...rev, ...exp])
    }

    async getFixedTransactionCollection(): Promise<Collection<Transaction>> {
        const fxRev = await this.fxRevController.getAll()
        const fxExp = await this.fxExController.getAll()
        return Collection.from([...fxRev, ...fxExp])
    }
}


export default TransactionController