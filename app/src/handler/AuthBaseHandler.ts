import { Nullable } from "../types";
import AuthHandler from "./AuthHandler";

abstract class AuthBaseHandler implements AuthHandler {
    protected next: Nullable<AuthBaseHandler> = null;
    abstract handle(email: string, password: string): boolean;
    setNextHandler(next: AuthBaseHandler): AuthBaseHandler {
        this.next = next;
        return this.next;
    }
}

export default AuthBaseHandler;

