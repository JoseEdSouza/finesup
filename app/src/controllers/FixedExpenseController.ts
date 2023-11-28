import { FixedTransactionBaseHandler, FixedTransactionHandler, ValidateFixedTransacionValue, ValidateFixedTransactionCategory, ValidateFixedTransactionDescription, ValidateFixedTransactionName, ValidateFixedTransactionPurchaseDate } from "../handler/FixedTransactionHandler";
import { FixedExpense } from "../models/FixedTransaction";
import { FixedExpenseDAO } from "../models/FixedTransactionDAO";
import Frequency from "../utils/Frequency";

class FixedExpenseController {
    private dao: FixedExpenseDAO
    private handler: FixedTransactionBaseHandler

    constructor() {
        this.dao = new FixedExpenseDAO()
        this.handler = new FixedTransactionHandler()
        this.handler.setNextHandler(new ValidateFixedTransactionName())
            .setNextHandler(new ValidateFixedTransactionDescription())
            .setNextHandler(new ValidateFixedTransacionValue())
            .setNextHandler(new ValidateFixedTransactionPurchaseDate())
            .setNextHandler(new ValidateFixedTransactionCategory())
    }

    createFixedExpense(
        name: string,
        description: string,
        value: number,
        purchaseDate: Date,
        limitDate: Date,
        id: number = 0,
        userId: number = 0,
        categoryId: number = 16,
        frequency: Frequency = Frequency.MONTHLY
    ): FixedExpense {
        const ft = new FixedExpense(name, description, value, purchaseDate, limitDate, frequency, categoryId, userId, id)
        if (this.handler.handle(ft))
            return new FixedExpense(name, description, value, purchaseDate, limitDate, frequency, categoryId, userId, id)
        else
            throw new Error("Erro ao criar transação")
    }

    async add(
        name: string,
        description: string,
        value: number,
        purchaseDate: Date,
        limitDate: Date,
        id: number = 0,
        userId: number = 0,
        categoryId: number = 16,
        frequency: Frequency = Frequency.MONTHLY
    ): Promise<FixedExpense> {
        const fixedExpense = this.createFixedExpense(name, description, value, purchaseDate, limitDate, id, userId, categoryId, frequency)
        return await this.dao.add(fixedExpense)
    }

    async get(id: number): Promise<FixedExpense> {
        return await this.dao.get(id)
    }

    async getAll(): Promise<FixedExpense[]> {
        return await this.dao.getAll()
    }

    async update(id: number, fixedExpense: FixedExpense): Promise<FixedExpense> {
        if (this.handler.handle(fixedExpense))
            return await this.dao.update(id, fixedExpense)
        else
            throw new Error("Erro ao atualizar transação")
    }

    async remove(id: number): Promise<boolean> {
        return await this.dao.delete(id)
    }

}

export default FixedExpenseController