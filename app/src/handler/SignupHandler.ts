import { Nullable } from "../types";

interface Handler{
    handle(name:string, email:string,password:string,confirmPassword:string):boolean
}

abstract class SignBaseHandler implements Handler {
    protected next: Nullable<SignBaseHandler> = null;
    abstract handle(name:string,email: string, password: string,confirmPassword:string): boolean;
    setNextHandler(next: SignBaseHandler): SignBaseHandler {
        this.next = next;
        return this.next;
    }
}

class ValidateSignupName extends SignBaseHandler {
    handle(name: string, email: string, password: string,confirmPassword:string): boolean {
        if (name.length < 3)
            throw new Error('Nome muito curto')
        if (name.length > 20)
            throw new Error('Nome muito longo')
        if (this.next === null)
            return true
        return this.next.handle(name, email, password,confirmPassword)
    }
}

class ValidateSignupEmail extends SignBaseHandler {
    handle(name:string,email: string, password: string,confirmPassword:string): boolean {
        const regex =  /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|.(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
        const validateEmail = (email: string) => {
            return regex.test(email.toLowerCase())
        };
        if (!validateEmail(email))
            throw new Error('Email inválido')
        if (this.next === null)
            return true
        return this.next.handle(name,email, password,confirmPassword)
    }
}

class ValidateSignupPassword extends SignBaseHandler {
    handle(name:string,email: string, password: string,confirmPassword:string): boolean {
        const atLeast8 = /^.{8,}$/
        const atLeast1Lowercase = /^(?=.*[a-z]).*$/
        const atLeast1Uppercase = /^(?=.*[A-Z]).*$/
        const atLeast1Number = /^(?=.*\d).*$/
        const atLeast1SpecialChar = /^(?=.*[@$!%*?&]).*$/
        if (!atLeast8.test(password))
            throw new Error('A senha deve ter pelo menos 8 caracteres')
        if (!atLeast1Lowercase.test(password))
            throw new Error('A senha deve ter pelo menos 1 letra minúscula')
        if (!atLeast1Uppercase.test(password))
            throw new Error('A senha deve ter pelo menos 1 letra maiúscula')
        if (!atLeast1Number.test(password))
            throw new Error('A senha deve ter pelo menos 1 número')
        if (!atLeast1SpecialChar.test(password))
            throw new Error('A senha deve ter pelo menos 1 caractere especial')
        if (password !== confirmPassword)
            throw new Error('As senhas não coincidem')
        if (this.next === null)
            return true
        return this.next.handle(name,email, password,confirmPassword)
    }
}

class SignupHandler extends SignBaseHandler {
    handle(name:string,email: string, password: string,confirmPassword:string): boolean {
        if (this.next === null)
            return true
        return this.next.handle(name,email, password,confirmPassword)
    }
}


export type {Handler}
export { ValidateSignupName, ValidateSignupEmail, ValidateSignupPassword,SignBaseHandler,SignupHandler}