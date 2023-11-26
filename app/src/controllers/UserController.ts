import Auth from "../services/Auth"
import LoginHandler from "../handler/LoginHandler";
import { ValidateUserEmail, ValidateUserPassword } from "../handler/ValidateAuth";
import Session from "../services/Session";

class UserController {

    static async login(email: string, password: string): Promise<boolean> {
        const handler = new LoginHandler()
        handler.setNextHandler(new ValidateUserEmail())
            .setNextHandler(new ValidateUserPassword())
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

    static signup(name: string, email: string, password: string) {
        //todo
    }


}

export default UserController