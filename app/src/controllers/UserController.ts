import Auth from "../services/Auth"
import LoginHandler from "../handler/LoginHandler";
import SignupHandler from "../handler/SignupHandler";
import { ValidateLoginEmail, ValidateLoginPassword } from "../handler/ValidateLogin";
import Session from "../services/Session";
import { ValidateSignupName,ValidateSignupEmail,ValidateSignupPassword } from "../handler/ValidateSignup";

class UserController {

    static async login(email: string, password: string): Promise<boolean> {
        const lowerCaseEmail = email.toLowerCase() 
        const handler = new LoginHandler()
        handler.setNextHandler(new ValidateLoginEmail())
            .setNextHandler(new ValidateLoginPassword())
        if (handler.handle(lowerCaseEmail, password)) {
            try {
                const token = await Auth.login(lowerCaseEmail, password)
                Session.createInstance(token, password)
                return true
            } catch (error) {
                throw new Error("Email ou senha incorretos")
            }
        }
        return false
    }

    static async signup(name: string, email: string, password: string,confirmPassword:string): Promise<boolean> {
        const lowerCaseEmail = email.toLowerCase()
        const handler = new SignupHandler()
        handler.setNextHandler(new ValidateSignupName())
            .setNextHandler(new ValidateSignupEmail())
            .setNextHandler(new ValidateSignupPassword())
        if (handler.handle(name, lowerCaseEmail, password,confirmPassword)) {
            try {
                const token = await Auth.signup(name, lowerCaseEmail, password)
                Session.createInstance(token, password)
                return true
            } catch (error) {
                throw new Error("Já existe um cadastro com o email informado")
            }
        }
        return false
    }


}

export default UserController