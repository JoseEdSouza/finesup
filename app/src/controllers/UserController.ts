import Auth from "../services/Auth"
import LoginHandler from "../handler/LoginHandler";
import { ValidateUserEmail, ValidateUserPassword } from "../handler/ValidateAuth";
import Session from "../services/Session";

class UserController {


    static login(email: string, password: string):boolean {
        const handler = new LoginHandler()
        handler.setNextHandler(new ValidateUserEmail())
            .setNextHandler(new ValidateUserPassword())
        if (handler.handle(email, password)) {
            let logged = false
            Auth.login(email, password)
            .then(res =>{
                Session.createInstance(res, password)
                logged = true
            }).catch(console.log)
            return logged
        }
        return false
    }

    static signup(name: string, email: string, password: string) {
        //todo
    }


}

export default UserController