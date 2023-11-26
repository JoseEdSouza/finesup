import AuthBaseHandler from "./AuthBaseHandler";

class LoginHandler extends AuthBaseHandler{
    
    handle(email: string, password: string): boolean {
        if (this.next === null)
            return false
        return this.next.handle(email,password)
    }
}


export default LoginHandler