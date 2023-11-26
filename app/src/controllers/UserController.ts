import Auth from "../services/Auth"
import LoginHandler from "../handler/LoginHandler";
import SignupHandler from "../handler/SignupHandler";
import { ValidateLoginEmail, ValidateLoginPassword } from "../handler/ValidateLogin";
import Session from "../services/Session";
import { ValidateSignupName,ValidateSignupEmail,ValidateSignupPassword } from "../handler/ValidateSignup";

class UserController {

    static async login(email: string, password: string): Promise<boolean> {
        const handler = new LoginHandler()
        handler.setNextHandler(new ValidateLoginEmail())
            .setNextHandler(new ValidateLoginPassword())
        if (handler.handle(email, password)) {
            try {
                const res = await Auth.login(email, password)
                Session.createInstance(res, password)
                return true
            } catch (error) {
                console.log(error)
                return false
            }
        }
        return false
    }

    static async signup(name: string, email: string, password: string,confirmPassword:string): Promise<boolean> {
        const handler = new SignupHandler()
        handler.setNextHandler(new ValidateSignupName())
            .setNextHandler(new ValidateSignupEmail())
            .setNextHandler(new ValidateSignupPassword())
        if (handler.handle(name, email, password,confirmPassword)) {
            try {
                const res = await Auth.signup(name, email, password)
                Session.createInstance(res, password)
                return true
            } catch (error) {
                console.log(error)
                return false
            }
        }
        return false
    }


}

export default UserController