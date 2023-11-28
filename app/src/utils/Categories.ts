import {ExpenseCategory} from "../models/Category"
enum ExpenseCategories{

    ALIMENTATION = new ExpenseCategory("Alimentação", "#CC2E43", 1),
    LEISURE = new ExpenseCategory("Lazer", "#F7FFA1", 2),
    CLOTHES = new ExpenseCategory("Roupas", "#70B6F6", 3), 
    MARKET = new ExpenseCategory("Mercado","#5AF961", 4),
    TRANSPORT = new ExpenseCategory("Transporte","#A2A0FA", 5) ,
    HEALTH = new ExpenseCategory("Saúde","#FF6928", 6),
    TRAVEL = new ExpenseCategory("Viagem","#C728F"", 7),
    PETS = new ExpenseCategory("Pets","#2D28F"", 8),
    HOME = new ExpenseCategory("Moradia","#28B2FF", 9), 
    ACCOUNTS = new ExpenseCategory("Contas","#28FF64", 10), 
    EDUCATION = new ExpenseCategory("Educação","#4D91B8", 12), 
    TAX = new ExpenseCategory("Imposto","#FFEA28", 13), 
    DONATION = new ExpenseCategory("Doações","#AD3D3D", 11), 
    INVESTMENT = new ExpenseCategory("Investimento Saída","#FF6928", 14), 
    EXCHANGE = new ExpenseCategory("Câmbio Saída","#0FBB00", 15),
    EXITOTHERS = new ExpenseCategory("Outras Entrada","#28FFBFs", 16) 
}