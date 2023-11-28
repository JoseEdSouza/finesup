import { Nullable, TransactionType } from "../types";
import Frequency from "../utils/Frequency";
import ExpenseController from "./ExpenseController";
import FixedExpenseController from "./FixedExpenseController";
import FixedRevenueController from "./FixedRevenueController";
import RevenueController from "./RevenueController";

class TransactionController {
    private revController: RevenueController = new RevenueController(),
    private expController: ExpenseController = new ExpenseController(),
    private fxExController: FixedExpenseController = new FixedExpenseController(),
    private fxRevController: FixedRevenueController = new FixedRevenueController()
    
    constructor(){
        this.revController = new RevenueController(),
        this.expController = new ExpenseController(),
        this.fxExController = new FixedExpenseController(),
        this.fxRevController = new FixedRevenueController()
    }

    private async addTransaction(controller, name, description, value, purchase_date, categoryId, useId, id, limitDate?, frequency?) {
        if(limitDate && frequency) {
            return await controller.add(name, description, value, purchase_date, useId, id, limitDate, categoryId, frequency);
        } else {
            return await controller.add(name, description, value, purchase_date, categoryId, useId, id);
        }
    }
    
    public async add(name, description, value, purchase_date, categoryId, useId, id, fixed, type, limitDate?, frequency?) {
        let controller = this.expController;
    
        if(fixed) {
            controller = type ? this.fxRevController : this.fxExController;
        } else {
            controller = type ? this.revController : this.expController;
        }
    
        return await this.addTransaction(controller, name, description, value, purchase_date, categoryId, useId, id, limitDate, frequency);
    }
    async get(id:number): Promise<TransactionType>
    async getAll(): Promise<>


}