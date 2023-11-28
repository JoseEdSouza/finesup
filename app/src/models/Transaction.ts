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

    constructor(
        public name: string, 
        public description: string,
        public value: number, 
        public purchaseDate: Date, 
        public categoryId: number = 10,
        public userId: number = 0, 
        public id: number = 0
        ) {}

    static fromJson(json: any): Revenue {
        return new Revenue(
            json.name,
            json.description,
            json.value,
            new Date(json.purchase_date),
            json.cat,
            json.user_id,
            json.id)
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
            purchase_date: this.purchaseDate.toISOString().slice(0,10),
            cat: this.categoryId
        }
    }

    toString(): string {
        return JSON.stringify(this.toJson())
    }
}

class Expense implements Transaction {

    constructor(
        public name: string,
        public description:string, 
        public value: number,
        public purchaseDate: Date,
        public categoryId: number = 16,
        public userId: number = 0,
        public id: number = 0
        ){}

    static fromJson(json: any): Expense {
        return new Expense(
            json.name,
            json.description,
            json.value,
            new Date(json.purchase_date),
            json.cat,
            json.user_id,
            json.id)
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
            purchase_date: this.purchaseDate.toISOString().slice(0,10),
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