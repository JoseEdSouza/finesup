
import { Nullable } from "../types";


interface AuthHandler {
    handle(email: string, password: string): boolean
}


abstract class AuthBaseHandler implements AuthHandler {
    protected next: Nullable<AuthBaseHandler> = null;
    abstract handle(email: string, password: string): boolean;
    setNextHandler(next: AuthBaseHandler): AuthBaseHandler {
        this.next = next;
        return this.next;
    }
}


class ValidateLoginEmail extends AuthBaseHandler {
    handle(email: string, password: string): boolean {
        if (email.length < 1)
            throw new Error('Digite um email')
        const regex = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|.(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
        const validateEmail = (email: string) => {
            return regex.test(email.toLowerCase())
        };
        if (!validateEmail(email))
            throw new Error('Email inválido')
        if (this.next === null)
            return true
        return this.next.handle(email, password)
    }
}


class ValidateLoginPassword extends AuthBaseHandler {
    handle(email: string, password: string): boolean {
        if (password.length < 1)
            throw new Error('Digite uma senha')
        if (password.length < 8)
            throw new Error('Senha inválida')
        if (this.next === null)
            return true
        return this.next.handle(email, password)
    }
}

class LoginHandler extends AuthBaseHandler{
    
    handle(email: string, password: string): boolean {
        if (this.next === null)
            return false
        return this.next.handle(email,password)
    }
}



export type { AuthHandler };
export { ValidateLoginEmail, ValidateLoginPassword, AuthBaseHandler,LoginHandler };



