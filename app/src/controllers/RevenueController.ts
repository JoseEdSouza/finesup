import { Revenue } from "../models/Transaction";
import { RevenueDAO } from "../models/TransactionDAO";
import { TransactionHandler, TransactionBaseHandler, ValidateTransactionCategoryId, ValidateTransactionDescription, ValidateTransactionName, ValidateTransactionPurchaseDate, ValidateTransactionValue } from "../handler/TransactionHandler";

class RevenueController {
    private dao: RevenueDAO;
    private handler: TransactionBaseHandler;

    constructor() {
        this.dao = new RevenueDAO();
        this.handler = new TransactionHandler();
        this.handler.setNextHandler(new ValidateTransactionName())
            .setNextHandler(new ValidateTransactionDescription())
            .setNextHandler(new ValidateTransactionValue())
            .setNextHandler(new ValidateTransactionPurchaseDate())
            .setNextHandler(new ValidateTransactionCategoryId())

    }
    createRevenue(
        name: string,
        description: string,
        value: number,
        purchase_date: Date,
        userId: number = 0,
        categoryId: number = 16,
        id: number = 0
    ): Revenue {
        const revenue = new Revenue(name, description, value, purchase_date, categoryId, userId, id)
        if (this.handler.handle(revenue))
            return revenue
        else
            throw new Error("Erro ao criar transação")
    }

    async get(id: number): Promise<Revenue> {
        return await this.dao.get(id)
    }

    async getAll(): Promise<Revenue[]> {
        return await this.dao.getAll()
    }

    async add(
        name: string,
        description: string,
        value: number,
        purchase_date: Date,
        categoryId: number = 16,
        id: number = 0
    ): Promise<Revenue> {
        const revenue = this.createRevenue(name, description, value, purchase_date, categoryId, id)
        return await this.dao.add(revenue)
    }

    async update(id: number, revenue: Revenue): Promise<Revenue> {
        if (this.handler.handle(revenue))
            return await this.dao.update(id, revenue)
        else
            throw new Error('Erro ao atualizar transação')
    }

}

export default RevenueController;