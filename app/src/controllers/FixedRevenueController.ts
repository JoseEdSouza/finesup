import { FixedRevenueDAO } from "../models/FixedTransactionDAO";
import { FixedRevenue } from "../models/FixedTransaction";
import Frequency from "../utils/Frequency";
import { FixedTransactionBaseHandler, FixedTransactionHandler, ValidateFixedTransacionValue, ValidateFixedTransactionCategory, ValidateFixedTransactionDescription, ValidateFixedTransactionName, ValidateFixedTransactionPurchaseDate } from "../handler/FixedTransactionHandler";

class FixedRevenueController {

    private dao: FixedRevenueDAO
    private handler: FixedTransactionBaseHandler

    constructor() {
        this.dao = new FixedRevenueDAO()
        this.handler = new FixedTransactionHandler()
        this.handler.setNextHandler(new ValidateFixedTransactionName())
            .setNextHandler(new ValidateFixedTransactionDescription())
            .setNextHandler(new ValidateFixedTransacionValue())
            .setNextHandler(new ValidateFixedTransactionPurchaseDate())
            .setNextHandler(new ValidateFixedTransactionCategory())
    }

    createFixedRevenue(
        name: string,
        description: string,
        value: number,
        purchaseDate: Date,
        limitDate: Date,
        id: number = 0,
        userId: number = 0,
        categoryId: number = 10,
        frequency: Frequency = Frequency.MONTHLY
    ): FixedRevenue {
        const ft = new FixedRevenue(name, description, value, purchaseDate, limitDate, frequency, categoryId, userId, id)
        if (this.handler.handle(ft))
            return ft
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
        categoryId: number = 10,
        frequency: Frequency = Frequency.MONTHLY
    ): Promise<FixedRevenue> {
        const fixedRevenue = this.createFixedRevenue(name, description, value, purchaseDate, limitDate, id, userId, categoryId, frequency)
        return await this.dao.add(fixedRevenue)
    }

    async get(id: number): Promise<FixedRevenue> {
        return await this.dao.get(id)
    }

    async getAll(): Promise<FixedRevenue[]> {
        return await this.dao.getAll()
    }

    async update(id: number, fixedRevenue: FixedRevenue): Promise<FixedRevenue> {
        if (this.handler.handle(fixedRevenue))
            return await this.dao.update(id, fixedRevenue)
        else
            throw new Error("Erro ao atualizar transação")
    }

    async remove(id: number): Promise<boolean> {
        return await this.dao.delete(id)
    }
}

export default FixedRevenueController