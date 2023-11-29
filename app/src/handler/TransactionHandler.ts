import { Revenue, Transaction} from "../models/Transaction";
import { Nullable } from "../types";
interface Handler {
    handle(transaction: Transaction): boolean;
}


abstract class TransactionBaseHandler implements Handler{
    protected next: Nullable<TransactionBaseHandler> = null;
    abstract handle(transaction: Transaction): boolean;
    setNextHandler(next: TransactionBaseHandler): TransactionBaseHandler {
        this.next = next;
        return this.next;
    }
}

class ValidateTransactionName extends TransactionBaseHandler{
    handle(transaction: Transaction): boolean {
        if(transaction.name.length < 3)
            throw new Error("Nome muito curto")
        const regex = /^[a-zA-ZÀ-ÖØ-öø-ÿ]+/
        if (!regex.test(transaction.name))
            throw new Error('O nome deve conter apenas letras')
        if(this.next===null)
            return true
        return this.next.handle(transaction);
    }   
}
class ValidateTransactionDescription extends TransactionBaseHandler{
    handle(transaction: Transaction): boolean {
        if(transaction.description.length < 3)
            throw new Error("Descrição muito curta")
        if(transaction.description.length > 100)
            throw new Error("Descrição muito longa")
        const regex = /^[a-zA-ZÀ-ÖØ-öø-ÿ]+/
        if (!regex.test(transaction.description))
            throw new Error('A descrição deve conter apenas letras')
        if(this.next===null)
            return true
        return this.next.handle(transaction);
    }
}
class ValidateTransactionValue extends TransactionBaseHandler{
    handle(transaction: Transaction): boolean {
        if(transaction.value < 0)
            throw new Error("Valor não pode ser negativo")
        if(this.next===null)
            return true
        return this.next.handle(transaction);
    
    }
}
class ValidateTransactionPurchaseDate extends TransactionBaseHandler{
    handle(transaction: Transaction): boolean {
        if(transaction.purchaseDate === null)
            throw new Error("Digite uma data")
        if(this.next===null)
            return true
        return this.next.handle(transaction);
    
    }
}
class ValidateTransactionCategoryId extends TransactionBaseHandler{
    handle(transaction: Transaction): boolean {
        if (transaction instanceof Revenue){
            if(!(transaction.categoryId >= 1 && transaction.categoryId < 10))
                transaction.categoryId = 10
        } else{
            if(!(transaction.categoryId >= 1 && transaction.categoryId < 16))
                transaction.categoryId = 16
        }
        if(this.next===null)
            return true
        return this.next.handle(transaction);
    }
}

class TransactionHandler extends TransactionBaseHandler{
    handle(transaction: Transaction): boolean {
        if(this.next===null)
            return true
        return this.next.handle(transaction);
    }
}

export type {Handler}
export {
    TransactionHandler,
    TransactionBaseHandler,
    ValidateTransactionCategoryId,
    ValidateTransactionDescription,
    ValidateTransactionName,
    ValidateTransactionPurchaseDate,
    ValidateTransactionValue
}