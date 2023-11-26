import Frequency from "../utils/Frequency"

abstract class FixedTransaction{
    abstract id: number
    abstract userId: number
    abstract name: string
    abstract description: string
    abstract value: number
    abstract purchaseDate: Date
    abstract limitDate: Date
    abstract frequency: Frequency
    abstract categoryId: number
    abstract toJson(): any
    abstract toString(): string
}

class FixedExpense implements FixedTransaction{
    id: number
    userId: number
    name: string
    description: string
    value: number
    purchaseDate: Date
    limitDate: Date
    frequency: Frequency
    categoryId: number

    constructor(id: number, userId: number, name: string, description: string, value: number, 
        purchaseDate: Date, limitDate: Date, frequency: Frequency, categoryId: number) {
        this.id = id
        this.userId = userId
        this.name = name
        this.description = description
        this.value = value
        this.purchaseDate = purchaseDate
        this.limitDate = limitDate
        this.frequency = frequency
        this.categoryId = categoryId
    }

    static fromJson(json: any): FixedExpense {
        return new FixedExpense(
            json.id,
            json.user_id,
            json.name,
            json.description,
            json.value,
            new Date(json.purchase_date),
            new Date(json.limit_date),
            json.frequency,
            json.cat)
    }

    static fromJsonArray(json: any[]): FixedExpense[] {
        return json.map(FixedExpense.fromJson)
    }

    toJson(): any {
        return {
            id: this.id,
            user_id: this.userId,
            name: this.name,
            description: this.description,
            value: this.value,
            cat: this.categoryId,
            purchase_date: this.purchaseDate.toISOString().slice(0,10),
            limit_date: this.limitDate.toISOString().slice(0,10),
            frequency: this.frequency
            
        }
    }

    toString(): string {
        return JSON.stringify(this.toJson())
    }
}

class FixedRevenue implements FixedTransaction{
    id: number
    userId: number
    name: string
    description: string
    value: number
    purchaseDate: Date
    limitDate: Date
    frequency: Frequency
    categoryId: number

    constructor(id: number, userId: number, name: string, description: string, value: number, 
        purchaseDate: Date, limitDate: Date, frequency: Frequency, categoryId: number) {
        this.id = id
        this.userId = userId
        this.name = name
        this.description = description
        this.value = value
        this.purchaseDate = purchaseDate
        this.limitDate = limitDate
        this.frequency = frequency
        this.categoryId = categoryId
    }

    static fromJson(json: any): FixedRevenue {
        return new FixedRevenue(
            json.id,
            json.user_id,
            json.name,
            json.description,
            json.value,
            new Date(json.purchase_date),
            new Date(json.limit_date),
            json.frequency,
            json.cat)
    }

    static fromJsonArray(json: any[]): FixedRevenue[] {
        return json.map(FixedRevenue.fromJson)
    }

    toJson(): any {
        return {
            id: this.id,
            user_id: this.userId,
            name: this.name,
            description: this.description,
            value: this.value,
            cat: this.categoryId,
            purchase_date: this.purchaseDate.toISOString().slice(0,10),
            limit_date: this.limitDate.toISOString().slice(0,10),
            frequency: this.frequency
        }
    }

    toString(): string {
        return JSON.stringify(this.toJson())
    }
}

export { FixedTransaction, FixedExpense, FixedRevenue }