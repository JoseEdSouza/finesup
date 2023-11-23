class Budget {
    userId: number
    categoryId: number
    renewalDate: Date
    finalValue: number
    actualValue: number

    constructor(userId: number, categoryId: number, renewalDate: Date, 
        finalValue: number, actualValue: number) {
        this.userId = userId
        this.categoryId = categoryId
        this.renewalDate = renewalDate
        this.finalValue = finalValue
        this.actualValue = actualValue
    }

    static fromJson(json: any): Budget {
        return new Budget(
            json.user_id,
            json.category_id,
            json.renewal_date,
            json.final_value,
            json.actual_value)
    }

    static fromJsonArray(json: any[]): Budget[] {
        return json.map(Budget.fromJson)
    }

    toJson(): any {
        return {
            user_id: this.userId,
            category_id: this.categoryId,
            renewal_date: this.renewalDate,
            final_value: this.finalValue,
            actual_value: this.actualValue
        }
    }

    toString(): string {
        return JSON.stringify(this.toJson())
    }
}

export default Budget