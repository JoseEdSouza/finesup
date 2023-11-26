import { Nullable } from "../types";
import SignHandler from "./SignHandler";

abstract class SignBaseHandler implements SignHandler {
    protected next: Nullable<SignBaseHandler> = null;
    abstract handle(name:string,email: string, password: string,confirmPassword:string): boolean;
    setNextHandler(next: SignBaseHandler): SignBaseHandler {
        this.next = next;
        return this.next;
    }
}

export default SignBaseHandler;

