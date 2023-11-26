import Box from "../models/Box";
import BoxDAO from "../models/BoxDAO";

class BoxController {

    private dao: BoxDAO
    
    constructor() { 
        this.dao = new BoxDAO()
    }


    createBox(name: string, description: string, final_value: number, actual_value: number, concluded: boolean): Box {

        return new Box(name, description, final_value, 0, actual_value, concluded)
    }

    async addBox(name: string, description: string, final_value: number): Promise<Box> {

        return await this.dao.add(this.createBox(name, description, final_value, 0, false))
    }

    async get(name: string): Promise<Box> {
        return await this.dao.get(name)
    }

    async getAll(): Promise<Box[]> {
        return await this.dao.getAll()
    }

    async update(name: string, box: Box): Promise<Box> {
        return await this.dao.update(name, box)
    }

    async remove(name: string): Promise<boolean> {
        return await this.dao.remove(name)
    }

    async deposit(name: string, value: number): Promise<Box> {
        let box = await this.dao.get(name)
        box.deposit(value)
        return await this.dao.update(name, box)
    }

    async withdraw(name: string, value: number): Promise<Box> {
        let box = await this.dao.get(name)
        box.withdraw(value)
        return await this.dao.update(name, box)
    }

}


export default BoxController