import { FixedRevenue, FixedTransaction } from "../models/FixedTransaction";
import { Nullable } from "../types";

interface Handler {
    handle(ft: FixedTransaction): boolean
}

abstract class FixedTransactionBaseHandler implements Handler {
    protected next: Nullable<FixedTransactionBaseHandler> = null
    abstract handle(ft: FixedTransaction): boolean
    setNextHandler(next: FixedTransactionBaseHandler): FixedTransactionBaseHandler {
        this.next = next
        return next
    }
}


class ValidateFixedTransactionName extends FixedTransactionBaseHandler {
    handle(ft: FixedTransaction): boolean {
        if (ft.name.length === 0)
            throw new Error('Digite um nome')
        if (ft.name.length < 3)
            throw new Error('Nome muito curto')
        const regex = /^[a-zA-ZÀ-ÖØ-öø-ÿ]+/
        if (!regex.test(ft.name))
            throw new Error('O nome deve conter apenas letras')
        if (this.next === null)
            return true
        return this.next.handle(ft)
    }
}

class ValidateFixedTransactionDescription extends FixedTransactionBaseHandler {
    handle(ft: FixedTransaction): boolean {
        if (ft.description.length > 140)
            throw new Error('Descrição muito longa')
        if (this.next === null)
            return true
        return this.next.handle(ft)
    }
}

class ValidateFixedTransacionValue extends FixedTransactionBaseHandler {
    handle(ft: FixedTransaction): boolean {
        if (ft.value <= 0)
            throw new Error('O valor deve ser maior que 0')
        if (this.next === null)
            return true
        return this.next.handle(ft)
    }
}

class ValidateFixedTransactionPurchaseDate extends FixedTransactionBaseHandler {
    handle(ft: FixedTransaction): boolean {
        if (ft.purchaseDate === null)
            throw new Error('Digite uma data')
        if (this.next === null)
            return true
        return this.next.handle(ft)
    }
}


class ValidateFixedTransactionCategory extends FixedTransactionBaseHandler {
    handle(ft: FixedTransaction): boolean {
        if (ft instanceof FixedRevenue){
            if (!(ft.categoryId <= 9 && ft.categoryId > 0))
                ft.categoryId = 10
        } else {
            if (!(ft.categoryId <= 15 && ft.categoryId > 0))
                ft.categoryId = 16
        }
        
        if (this.next === null)
            return true
        return this.next.handle(ft)
    }
}


class FixedTransactionHandler extends FixedTransactionBaseHandler {
    handle(ft: FixedTransaction): boolean {
        if (this.next === null)
            return true
        return this.next.handle(ft)
    }
}


export type { Handler }
export {
    ValidateFixedTransactionName,
    ValidateFixedTransactionDescription,
    ValidateFixedTransacionValue,
    ValidateFixedTransactionPurchaseDate,
    ValidateFixedTransactionCategory,
    FixedTransactionBaseHandler,
    FixedTransactionHandler
}

