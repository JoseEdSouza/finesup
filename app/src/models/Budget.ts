class Budget {

    constructor(
        public categoryId: number, 
        public renewalDate: Date, 
        public finalValue: number, 
        public userId: number = 0, 
        public actualValue: number = 0) {}

    static fromJson(json: any): Budget {
        return new Budget(
            json.category_id,
            json.renewal_date,
            json.final_value,
            json.user_id,
            json.actual_value)
    }

    static fromJsonArray(json: any[]): Budget[] {
        return json.map(Budget.fromJson)
    }

    toJson(): any {
        return {
            user_id: this.userId,
            category: this.categoryId,
            renewal_date: this.renewalDate.toISOString().slice(0,10),
            final_value: this.finalValue,
            actual_value: this.actualValue
        }
    }

    toString(): string {
        return JSON.stringify(this.toJson())
    }
}

export default Budget