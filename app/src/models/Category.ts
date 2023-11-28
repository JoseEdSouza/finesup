class ExpenseCategory {
    constructor(
        public readonly name: string,
        public readonly color: string,
        public readonly id: number
    ){}
}
class RevenueCategory {
    constructor(
        public readonly name: string,
        public readonly color: string,
        public readonly id: number
    ){}
}

export {
    RevenueCategory,
    ExpenseCategory
}