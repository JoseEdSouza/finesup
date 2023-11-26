import AuthBaseHandler from "./AuthBaseHandler";


class ValidateUserEmail extends AuthBaseHandler {
    handle(email: string, password: string): boolean {
        const validateEmail = (email: string) => {
            return String(email)
                .toLowerCase()
                .match(
                    /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|.(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
                );
        };
        if (validateEmail(email) === null)
            return false
        if (this.next === null)
            return true
        return this.next.handle(email, password)
    }
}

class ValidateUserPassword extends AuthBaseHandler {
    handle(email: string, password: string): boolean {
        if (password.length < 8)
            return false
        if (this.next === null)
            return true
        return this.next.handle(email, password)
    }
}

export { ValidateUserEmail, ValidateUserPassword }


