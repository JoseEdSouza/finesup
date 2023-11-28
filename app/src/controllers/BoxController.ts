import Box from "../models/Box";
import BoxDAO from "../models/BoxDAO";
import { CreateBoxHandler, ValidateBoxFinalValue, ValidateBoxDescription, ValidateBoxName, ValidateBoxActualValue } from "../handler/BoxHandler";
import ServerOfflineError from "../utils/Error";
class BoxController {

    private dao: BoxDAO
    private handler: CreateBoxHandler
    constructor() {
        this.dao = new BoxDAO()
        this.handler = new CreateBoxHandler()
        this.handler.setNextHandler(new ValidateBoxName())
            .setNextHandler(new ValidateBoxDescription())
            .setNextHandler(new ValidateBoxFinalValue())
            .setNextHandler(new ValidateBoxActualValue())

    }

    createBox(name: string, description: string, final_value: number, actual_value: number, concluded: boolean): Box {
        const box = new Box(name, description, final_value, 0, actual_value)
        if (this.handler.handle(box)) {
            return box
        } else
            throw new Error("Erro ao criar caixa")
    }

    async addBox(name: string, description: string, final_value: number): Promise<Box> {
        let box = this.createBox(name, description, final_value, 0, false)
        try {
            return await this.dao.add(box)
        } catch (error) {
            if (error instanceof ServerOfflineError)
                throw error
            throw new Error("Nome já existente")
        }
    }

    async get(name: string): Promise<Box> {
        return this.dao.get(name)
    }

    async getAll(): Promise<Box[]> {
        return this.dao.getAll()
    }

    async update(name: string, box: Box): Promise<Box> {
        if (this.handler.handle(box)) {
            try {
                return this.dao.update(name, box)
            } catch (error) {
                if (error instanceof ServerOfflineError)
                    throw error
                throw new Error("Nome já existente")
            }
        } else
            throw new Error("Erro ao atualizar caixa")
    }

    async remove(name: string): Promise<boolean> {
        return this.dao.remove(name)
    }

    async deposit(name: string, value: number): Promise<Box> {
        let box = await this.dao.get(name)
        box.deposit(value)
        return this.dao.update(name, box)
    }

    async withdraw(name: string, value: number): Promise<Box> {
        let box = await this.dao.get(name)
        box.withdraw(value)
        return this.dao.update(name, box)
    }

}


export default BoxController