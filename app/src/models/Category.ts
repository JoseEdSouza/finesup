export class ExpenseCategory {
    constructor(
        public readonly name: string,
        public readonly color: string,
        public readonly id: number
    ) { }
}
export class RevenueCategory {
    constructor(
        public readonly name: string,
        public readonly color: string,
        public readonly id: number
    ) { }
}

export const ExpenseCategories = {
    ALIMENTATION: new ExpenseCategory("Alimentação", "#CC2E43", 1),
    LEISURE: new ExpenseCategory("Lazer", "#F7FFA1", 2),
    CLOTHES: new ExpenseCategory("Roupas", "#70B6F6", 3),
    MARKET: new ExpenseCategory("Mercado", "#5AF961", 4),
    TRANSPORT: new ExpenseCategory("Transporte", "#A2A0FA", 5),
    HEALTH: new ExpenseCategory("Saúde", "#FF6928", 6),
    TRAVEL: new ExpenseCategory("Viagem", "#C728F", 7),
    PETS: new ExpenseCategory("Pets", "#2D28F", 8),
    HOME: new ExpenseCategory("Moradia", "#28B2FF", 9),
    ACCOUNTS: new ExpenseCategory("Contas", "#28FF64", 10),
    DONATION: new ExpenseCategory("Doações", "#AD3D3D", 11),
    EDUCATION: new ExpenseCategory("Educação", "#4D91B8", 12),
    TAX: new ExpenseCategory("Imposto", "#FFEA28", 13),
    INVESTMENT: new ExpenseCategory("Investimento Saída", "#FF6928", 14),
    EXCHANGE: new ExpenseCategory("Câmbio Saída", "#0FBB00", 15),
    EXITOTHERS: new ExpenseCategory("Outras Entrada", "#28FFBFs", 16)
}
export const RevenueCategories = {
    CASHBACK: new RevenueCategory("CashBack", "#CC2E2E", 1),
    SALES: new RevenueCategory("Vendas", "#EBEE61", 2),
    BONUS: new RevenueCategory("Bônus", "#70B6F6", 3),
    REVERSAL: new RevenueCategory("Estorno", "#A2A0FA", 4),
    INCOME: new RevenueCategory("Renda", "#C728FF", 5),
    PERFORMANCE: new RevenueCategory("Rendimento", "#2D28FF", 6),
    BALANCECORRECTION: new RevenueCategory("Correção de Saldo", "#C4E977", 7),
    INVESTMENT: new RevenueCategory("Investiemnto Entrada", "#FF6928", 8),
    EXCHANGE: new RevenueCategory("Câmbio Entrada", "#0FBB00", 9),
    ENTRYOTHERS: new RevenueCategory("Outras Entradas", "#A6EB15", 10)
}