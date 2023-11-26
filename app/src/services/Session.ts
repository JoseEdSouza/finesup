import * as jwt from 'jsonwebtoken';
import Auth from './Auth';
import { Nullable, DecodedToken } from '../types';
import User from '../models/User';



class Session {
    token: string
    user: User
    private expiry: number

    private static instance: Nullable<Session> = null;

    private constructor(token: string, password: string) {
        this.token = token;
        const decodedToken = this.decodeJWT();
        this.user = new User(
            decodedToken.user_id,
            decodedToken.user_email,
            decodedToken.user_name,
            password)
        this.expiry = decodedToken.expiry
    }

    static getInstance(): Session {
        if (Session.instance === null)
            throw new Error('Session not initialized');
        else if (Session.instance.expiry < Date.now()) {
            let user = Session.instance.user
            Auth.login(user.email, user.password)
                .then(token => Session.instance = Session.createInstance(token, user.password))
                .catch(err => console.log(err));
        }

        return Session.instance
    }

    private decodeJWT() {
        const decodedToken = jwt.decode(this.token) as DecodedToken
        return decodedToken
    }

    static createInstance(token: string, password: string): Session {
        if (Session.instance === null) {
            Session.instance = new Session(token, password)
        }
        return Session.instance
    }
}


export default Session;