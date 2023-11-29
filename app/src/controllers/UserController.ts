import Auth from "../services/Auth"
import { ValidateLoginEmail, ValidateLoginPassword, LoginHandler } from "../handler/LoginHandler";
import Session from "../services/Session";
import { ValidateSignupName, ValidateSignupEmail, ValidateSignupPassword, SignupHandler } from "../handler/SignupHandler";
import ServerOfflineError from "../utils/Error";

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
                if(error instanceof ServerOfflineError)
                    throw new Error(error.message)
                throw new Error("Email ou senha incorretos")
            }
        }
        return false
    }

    static async signup(name: string, email: string, password: string, confirmPassword: string): Promise<boolean> {
        const lowerCaseEmail = email.toLowerCase()
        const handler = new SignupHandler()
        handler.setNextHandler(new ValidateSignupName())
            .setNextHandler(new ValidateSignupEmail())
            .setNextHandler(new ValidateSignupPassword())
        if (handler.handle(name, lowerCaseEmail, password, confirmPassword)) {
            try {
                const token = await Auth.signup(name, lowerCaseEmail, password)
                Session.createInstance(token, password)
                return true
            } catch (error) {
                if(error instanceof ServerOfflineError)
                    throw new Error(error.message)
                throw new Error("Já existe um cadastro com o email informado")
            }
        }
        return false
    }


    static async updateEmail(email: string): Promise<boolean> {
        const lowerCaseEmail = email.toLowerCase()
        const handler = new ValidateSignupEmail()
        if (handler.handle(lowerCaseEmail, "", "", "")) {
            try {
                const token = await Auth.changeEmail(lowerCaseEmail)
                Session.createInstance(token, Session.getInstance().user.password)
                return true
            } catch (error) {
                if(error instanceof ServerOfflineError)
                    throw new Error(error.message)
                throw new Error("Já existe um cadastro com o email informado")
            }
        }
        return false
    }

    static async updatePassword(password: string, confirmPassword: string): Promise<boolean> {
        const handler = new ValidateSignupPassword()
        if (handler.handle("", "", password, confirmPassword)) {
            try {
                const token = await Auth.changePassword(password)
                Session.createInstance(token, password)
                return true
            } catch (error) {
                if(error instanceof ServerOfflineError)
                    throw new Error(error.message)
                throw new Error("Usuário não encontrado")
            }
        }
        return false
    }

    static async deleteAccount(): Promise<boolean> {
        try {
            await Auth.deleteAccount(Session.getInstance().user.id)
            Session.endSession()
            return true
        } catch (error) {
            if(error instanceof ServerOfflineError)
                throw new Error(error.message)
            throw new Error("Usuário não encontrado")
        }
    }

    static async changeName(newName: string): Promise<boolean> {
        try {
            const token = await Auth.changeName(newName)
            Session.createInstance(token, Session.getInstance().user.password)
            return true
        } catch (error) {
            if(error instanceof ServerOfflineError)
                throw new Error(error.message)
            throw new Error("Usuário não encontrado")
        }
    }

    static async logout(): Promise<void> {
        Session.endSession()
    }


}

export default UserController