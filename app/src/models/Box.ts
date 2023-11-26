export class Box {
    userId: number
    name: string
    description: string
    actualValue: number
    finalValue: number
    concluded: boolean

    constructor(userId: number, name: string, description: string, actualValue: number = 0, finalValue: number, concluded: boolean = false) {
        this.userId = userId
        this.name = name
        this.description = description
        this.actualValue = actualValue
        this.finalValue = finalValue
        this.concluded = concluded
    }

    static fromJson(json: any): Box {
        return new Box(
            json.user_id,
            json.name,
            json.description,
            json.final_value,
            json.actual_value,
            json.concluded)
    }

    static fromJsonArray(json: any[]): Box[] {
        return json.map(Box.fromJson)
    }

    toJson(): any {
        return {
            user_id: this.userId,
            name: this.name,
            description: this.description,
            final_value: this.finalValue,
            actual_value: this.actualValue,
            concluded: this.concluded
        }
    }

    toString(): string {
        return JSON.stringify(this.toJson())
    }

    deposit(value: number) {
        if (this.actualValue + value > this.finalValue) {
            this.actualValue = this.finalValue
            this.concluded = true
        }
        else
            this.actualValue += value
    }

    withdraw(value: number) {
        if (this.actualValue - value < 0) {
            this.actualValue = 0
            this.concluded = false
        }
        else
            this.actualValue -= value
    }
}

export default Box