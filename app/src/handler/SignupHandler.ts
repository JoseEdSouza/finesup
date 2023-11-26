import SignBaseHandler from "./SignBaseHandler";

class SignupHandler extends SignBaseHandler {
    handle(name:string,email: string, password: string,confirmPassword:string): boolean {
        if (this.next === null)
            return true
        return this.next.handle(name,email, password,confirmPassword)
    }
}

export default SignupHandler