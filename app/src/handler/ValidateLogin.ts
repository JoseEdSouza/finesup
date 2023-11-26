import AuthBaseHandler from "./AuthBaseHandler";


class ValidateLoginEmail extends AuthBaseHandler {
    handle(email: string, password: string): boolean {
        const regex =  /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|.(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
        const validateEmail = (email: string) => {
            return regex.test(email.toLowerCase())
        };
        if (validateEmail(email) === false)
            return false
        if (this.next === null)
            return true
        return this.next.handle(email, password)
    }
}

class ValidateLoginPassword extends AuthBaseHandler {
    handle(email: string, password: string): boolean {
        if (password.length < 8)
            return false
        if (this.next === null)
            return true
        return this.next.handle(email, password)
    }
}

export { ValidateLoginEmail, ValidateLoginPassword }


