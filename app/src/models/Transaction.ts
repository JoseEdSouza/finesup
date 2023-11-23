abstract class Transaction {
    abstract id: number
    abstract userId: number
    abstract name: string
    abstract description: string
    abstract value: number
    abstract purchaseDate: Date
    abstract categoryId: number
    abstract toJson(): any
    abstract toString(): string
}

class Revenue implements Transaction {
    id: number
    userId: number
    name: string
    description: string
    value: number
    purchaseDate: Date
    categoryId: number

    constructor(id: number, userId: number, name: string, description: string,
        value: number, purchaseDate: Date, categoryId: number) {
        this.id = id
        this.userId = userId
        this.name = name
        this.description = description
        this.value = value
        this.purchaseDate = purchaseDate
        this.categoryId = categoryId
    }

    static fromJson(json: any): Revenue {
        return new Revenue(
            json.id,
            json.user_id,
            json.name,
            json.description,
            json.value,
            json.purchase_date,
            json.cat)
    }

    static fromJsonArray(json: any[]): Revenue[] {
        return json.map(Revenue.fromJson)
    }

    toJson(): any {
        return {
            id: this.id,
            user_id: this.userId,
            name: this.name,
            description: this.description,
            value: this.value,
            purchase_date: this.purchaseDate,
            cat: this.categoryId
        }
    }

    toString(): string {
        return JSON.stringify(this.toJson())
    }
}

class Expense implements Transaction {
    id: number
    userId: number
    name: string
    description: string
    value: number
    purchaseDate: Date
    categoryId: number

    constructor(id: number, userId: number, name: string, description: string,
        value: number, purchaseDate: Date, categoryId: number) {
        this.id = id
        this.userId = userId
        this.name = name
        this.description = description
        this.value = value
        this.purchaseDate = purchaseDate
        this.categoryId = categoryId
    }

    static fromJson(json: any): Expense {
        return new Expense(
            json.id,
            json.user_id,
            json.name,
            json.description,
            json.value,
            json.purchase_date,
            json.cat)
    }

    static fromJsonArray(json: any[]): Expense[] {
        return json.map(Expense.fromJson)
    }

    toJson(): any {
        return {
            id: this.id,
            user_id: this.userId,
            name: this.name,
            description: this.description,
            value: this.value,
            purchase_date: this.purchaseDate,
            cat: this.categoryId
        }
    }

    toString(): string {
        return JSON.stringify(this.toJson())
    }
}

export {
    Transaction,
    Revenue,
    Expense
}