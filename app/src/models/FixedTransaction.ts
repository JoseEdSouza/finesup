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

    constructor(
        public name: string, 
        public description: string, 
        public value: number, 
        public purchaseDate: Date, 
        public limitDate: Date, 
        public frequency: Frequency = Frequency.MONTHLY, 
        public categoryId: number = 16,
        public userId: number = 0, 
        public id: number = 0){}

    static fromJson(json: any): FixedExpense {
        return new FixedExpense(
            json.name,
            json.description,
            json.value,
            new Date(json.purchase_date),
            new Date(json.limit_date),
            json.frequency,
            json.cat,
            json.user_id,
            json.id)
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

    constructor(
        public name: string, 
        public description: string, 
        public value: number, 
        public purchaseDate: Date, 
        public limitDate: Date, 
        public frequency: Frequency = Frequency.MONTHLY, 
        public categoryId: number = 16,
        public userId: number = 0, 
        public id: number = 0){}

    static fromJson(json: any): FixedRevenue {
        return new FixedRevenue(
            json.name,
            json.description,
            json.value,
            new Date(json.purchase_date),
            new Date(json.limit_date),
            json.frequency,
            json.cat)
            json.user_id,
            json.id,
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