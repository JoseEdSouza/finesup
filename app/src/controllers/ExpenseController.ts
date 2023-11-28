import { Expense } from "../models/Transaction";
import { ExpenseDAO } from "../models/TransactionDAO";
import { TransactionHandler, TransactionBaseHandler, ValidateTransactionCategoryId, ValidateTransactionDescription, ValidateTransactionName, ValidateTransactionPurchaseDate, ValidateTransactionValue } from "../models/TransactionHandler";

class ExpenseController{
    private dao: ExpenseDAO;
    private handler: TransactionBaseHandler;

    constructor(){
        this.dao = new ExpenseDAO();
        this.handler = new TransactionHandler();
        this.handler.setNextHandler(new ValidateTransactionName())
        .setNextHandler(new ValidateTransactionDescription())
        .setNextHandler(new ValidateTransactionValue())
        .setNextHandler(new ValidateTransactionPurchaseDate())
        .setNextHandler(new ValidateTransactionCategoryId())
    }
    createExpense(
        name:string, 
        description: string, 
        value: number, 
        purchase_date: Date,
        userId:number=0, 
        categoryId:number=16,
        id: number=0
        ): Expense{
        
        const expense = new Expense(name, description, value, purchase_date, categoryId, id)
        if (this.handler.handle(expense))
            return expense
        else 
            throw new Error("Erro ao criar transação")
    }

    async get(id: number): Promise<Expense>{

        return await this.dao.get(id)
    }

    async getAll(): Promise<Expense[]>{
        return await this.dao.getAll()
    }

    async add(
        name: string, 
        description: string, 
        value:number, 
        purchase_date: Date, 
        categoryId: number = 16, 
        id: number = 0
        ): Promise<Expense>{
        const expense = this.createExpense(name, description, value, purchase_date, categoryId, id)
        return await this.dao.add(expense)
    }
    async update(id: number, expense: Expense): Promise<Expense>{
        if(this.handler.handle(expense))
            return await this.dao.update(id, expense)
        else 
            throw new Error('Erro ao atualizar transação')
    }

}

export default ExpenseController;