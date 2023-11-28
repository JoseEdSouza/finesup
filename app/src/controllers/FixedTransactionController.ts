import { Revenue } from "../models/Transaction";
import { RevenueDAO } from "../models/TransactionDAO";

class RevenueController{
    private dao: RevenueDAO;

    constructor(
        private dao: RevenueDAO = new RevenueDAO()
    ){}
    createRevenue(value: number, description: string, date: Date): Revenue{
        const revenue = new Revenue(value, description, date)
        return revenue
    }
    async get(id: number): Promise<Revenue>{
        return await this.dao.get(id)
    }
    async getAll(): Promise<Revenue[]>{
        return await this.dao.getAll()
    }
    async add(revenue: Revenue): Promise<Revenue>{
        return await this.dao.add(revenue)
    }
    async update(id: number, revenue: Revenue): Promise<Revenue>{
}