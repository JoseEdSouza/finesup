import Budget from "../models/Budget";
import { Nullable } from "../types";

interface Handler {
    handle(budget: Budget): boolean;
}


abstract class BudgetBaseHandler implements Handler {
    protected next: Nullable<BudgetBaseHandler> = null;
    abstract handle(budget: Budget): boolean;
    setNextHandler(next: BudgetBaseHandler): BudgetBaseHandler {
        this.next = next;
        return this.next;
    }
}
class ValidateBudgetFinalValue extends BudgetBaseHandler {
    handle(budget: Budget): boolean {
        if (budget.finalValue < 1)
            throw new Error('O Orçamento deve ter um valor maior que $1.00')
        if (this.next === null)
            return true
        return this.next.handle(budget)
    }
}

class ValidateBudgetCategory extends BudgetBaseHandler {
    handle(budget: Budget): boolean {
        if (!(budget.categoryId >= 1 && budget.categoryId < 16)) {
            budget.categoryId = 16
        }
        if (this.next === null)
            return true
        return this.next.handle(budget)
    }
}

class CreateBudgetHandler extends BudgetBaseHandler {
    handle(budget: Budget): boolean {
        if (this.next === null)
            return true
        return this.next.handle(budget)
    }
}


export type { Handler }
export {
    BudgetBaseHandler,
    ValidateBudgetCategory,
    ValidateBudgetFinalValue,
    CreateBudgetHandler
}