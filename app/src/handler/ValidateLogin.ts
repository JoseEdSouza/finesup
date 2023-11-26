import AuthBaseHandler from "./AuthBaseHandler";


class ValidateLoginEmail extends AuthBaseHandler {
    handle(email: string, password: string): boolean {
        if (email.length < 1)
            throw new Error('Digite um email')
        const regex =  /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|.(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
        const validateEmail = (email: string) => {
            return regex.test(email.toLowerCase())
        };
        if (validateEmail(email) === false)
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

export { ValidateLoginEmail, ValidateLoginPassword }


