export class Box{
    userId:number
    name:string
    description:string
    actualValue:number
    finalValue:number
    concluded:boolean

    constructor(userId:number,name:string,description:string,actualValue:number=0,finalValue:number,concluded:boolean=false){
        this.userId = userId
        this.name = name
        this.description = description
        this.actualValue = actualValue
        this.finalValue = finalValue
        this.concluded = concluded
    }

    deposit(value:number) {
        if(this.actualValue + value > this.finalValue){
            this.actualValue = this.finalValue
            this.concluded = true
        }
        else
            this.actualValue += value
    }

    withdraw(value:number){
        if(this.actualValue - value < 0){
            this.actualValue = 0
            this.concluded = false
        }
        else
            this.actualValue -= value
    }
}

export default Box