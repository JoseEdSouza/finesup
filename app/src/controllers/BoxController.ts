import Box from "../models/Box";
import BoxDAO from "../models/BoxDAO";
import { CreateBoxHandler, ValidateBoxFinalValue, ValidateBoxDescription, ValidateBoxName, ValidateBoxActualValue } from "../handler/BoxHandler";
class BoxController {

    private dao: BoxDAO

    private handler: CreateBoxHandler

    constructor() {
        this.dao = new BoxDAO()
        this.handler = new CreateBoxHandler()
            .setNextHandler(new ValidateBoxName())
            .setNextHandler(new ValidateBoxDescription())
            .setNextHandler(new ValidateBoxFinalValue())
            .setNextHandler(new ValidateBoxActualValue())
    }

    createBox(name: string, description: string, final_value: number, actual_value: number, concluded: boolean): Box {
        const box = new Box(name, description, final_value, 0, actual_value)
        this.handler.handle(box)
        return box
    }

    async addBox(name: string, description: string, final_value: number): Promise<Box> {
        return this.dao.add(this.createBox(name, description, final_value, 0, false))
    }

    async get(name: string): Promise<Box> {
        return this.dao.get(name)
    }

    async getAll(): Promise<Box[]> {
        return this.dao.getAll()
    }

    async update(name: string, box: Box): Promise<Box> {
        this.handler.handle(box)
        return this.dao.update(name, box)
    }

    async remove(name: string): Promise<boolean> {
        return this.dao.remove(name)
    }

    async deposit(name: string, value: number): Promise<Box> {
        let box = await this.dao.get(name)
        box.deposit(value)
        return  this.dao.update(name, box)
    }

    async withdraw(name: string, value: number): Promise<Box> {
        let box = await this.dao.get(name)
        box.withdraw(value)
        return this.dao.update(name, box)
    }

}


export default BoxController