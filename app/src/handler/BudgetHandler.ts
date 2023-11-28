import Budget from "../models/Budget";
import { Nullable } from "../types";

interface BudgetHandler {
    handle(budget: Budget): boolean;
}


abstract class BudgetBaseHandler implements BudgetHandler {
    protected next: Nullable<BudgetBaseHandler> = null;
    abstract handle(budget: Budget): boolean;
    setNextHandler(next: BudgetBaseHandler): BudgetBaseHandler {
        this.next = next;
        return this.next;
    }
}

class ValidateBudgetActualValue extends BudgetBaseHandler {
    handle(budget: Budget): boolean {
        if (budget.actualValue < 0) {
            budget.actualValue = 0
        }
        if (this.next === null)
            return true
        return this.next.handle(budget)
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


export type { BudgetHandler }
export {
    BudgetBaseHandler,
    ValidateBudgetActualValue,
    ValidateBudgetCategory,
    ValidateBudgetFinalValue,
    CreateBudgetHandler
}