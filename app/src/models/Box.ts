export class Box {

    constructor(
        public name:string,
        public description:string,
        public finalValue:number,
        public userId:number = 0,
        public actualValue:number = 0,
        public concluded:boolean = false,
    ){}

    static fromJson(json: any): Box {
        return new Box(
            json.name,
            json.description,
            json.final_value,
            json.user_id,
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