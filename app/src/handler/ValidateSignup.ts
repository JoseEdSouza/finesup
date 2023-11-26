import SignBaseHandler from "./SignBaseHandler";

class ValidateSignupName extends SignBaseHandler {
    handle(name: string, email: string, password: string,confirmPassword:string): boolean {
        if (name.length < 3)
            return false
        if (name.length > 20)
            return false
        const regex = /^[a-z0-9_\.]+$/
        if (regex.test(name) === false)
            return false
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
        if (validateEmail(email) === false)
            return false
        if (this.next === null)
            return true
        return this.next.handle(name,email, password,confirmPassword)
    }
}

class ValidateSignupPassword extends SignBaseHandler {
    handle(name:string,email: string, password: string,confirmPassword:string): boolean {
        const regex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/;
        if (regex.test(password) === false)
            return false
        if (password !== confirmPassword)
            return false
        if (this.next === null)
            return true
        return this.next.handle(name,email, password,confirmPassword)
    }
}


export { ValidateSignupName, ValidateSignupEmail, ValidateSignupPassword}