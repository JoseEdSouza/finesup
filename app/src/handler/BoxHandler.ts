import Box from "../models/Box";
import { Nullable } from "../types";

interface BoxHandler {
    handle(box: Box): void;
}


abstract class BoxBaseHandler implements BoxHandler {
    protected next: Nullable<BoxBaseHandler> = null;
    abstract handle(box: Box): boolean;
    setNextHandler(next: BoxBaseHandler): BoxBaseHandler {
        this.next = next;
        return this.next;
    }
}


class ValidateBoxName extends BoxBaseHandler {
    handle(box: Box): boolean {
        if (box.name.length < 3)
            throw new Error('O nome deve ter pelo menos 3 caracteres')
        if (box.name.length > 20)
            throw new Error('O nome deve ter no máximo 20 caracteres')
        const regex = /^[a-zA-Z\s]+$/
        if (!regex.test(box.name))
            throw new Error('O nome deve conter apenas letras')
        if (this.next === null)
            return true
        return this.next.handle(box)
    }
}


class ValidateBoxDescription extends BoxBaseHandler {
    handle(box: Box): boolean {
        if (box.description.length > 140)
            throw new Error('O nome deve ter no máximo 140 caracteres')
        if (this.next === null)
            return true
        return this.next.handle(box)
    }
}


class ValidateBoxActualValue extends BoxBaseHandler {
    handle(box: Box): boolean {
        if (box.actualValue < 0) {
            box.actualValue = 0
            box.concluded = false
        }
        else if (box.actualValue > box.finalValue)
            box.concluded = true
        else
            box.concluded = false
        if (this.next === null)
            return true
        return this.next.handle(box)
    }
}


class ValidateBoxFinalValue extends BoxBaseHandler {
    handle(box: Box): boolean {
        if (box.finalValue < 1)
            throw new Error('A meta deve ter um valor maior que $1.00')
        if (this.next === null)
            return true
        return this.next.handle(box)
    }
}

class CreateBoxHandler extends BoxBaseHandler {
    handle(box: Box): boolean {
        if (this.next === null)
            return true
        return this.next.handle(box)
    }

}


export type { BoxHandler }
export {
    BoxBaseHandler,
    ValidateBoxActualValue,
    ValidateBoxDescription,
    ValidateBoxFinalValue,
    ValidateBoxName,
    CreateBoxHandler
}