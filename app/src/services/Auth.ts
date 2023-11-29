import Endpoints from "../utils/Endpoints";
import ServerOfflineError from "../utils/Error";
import Session from "./Session";

class Auth {

    static async login(email: string, password: string): Promise<any> {

        const req = new Request(Endpoints.LOGIN, {
            method: 'POST',
            headers: {
                'accept': 'application/json',
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({
                "email": email,
                "password": password
            })
        })

        const response = await fetch(req)
            .then(res => {
                if (res.status === 200)
                    return res
                else {
                    throw new Error('Invalid credentials')
                }
            },() => { 
                throw new ServerOfflineError('Servidor offline, tente novamente mais tarde') 
            })
        const res = await response.json()
        return await res.access_token;
    }

    static async signup(name: string, email: string, password: string): Promise<any> {
        const req = new Request(Endpoints.SIGNUP, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({
                "name": name,
                "email": email,
                "password": password
            })
        })

        const response = await fetch(req)
            .then(res => {
                if (res.status === 200)
                    return res
                else {
                    throw new Error('Already registered')
                }
            }, () => { 
                throw new ServerOfflineError('Servidor offline, tente novamente mais tarde') 
            })
        const res = await response.json()
        return await res.access_token;

    }

    static async changeEmail(newEmail: string): Promise<any> {
        const req = new Request(Endpoints.UPDATE_EMAIL, {
            method: 'PUT',
            headers: {
                'accept': 'application/json',
                'Content-Type': 'application/json',
                'Authorization': `Bearer ${Session.getInstance().token}`
            },
            body: JSON.stringify({
                    "id": 0,
                    "email": newEmail,
            })
        })
        const response = await fetch(req)
        .then(res => {
            if (res.status === 200)
                return res
            else {
                throw new Error('Invalid credentials')
            }
        }, () => { 
            throw new ServerOfflineError('Servidor offline, tente novamente mais tarde') 
        })
        const res = await response.json()
        return await res.access_token;

    }

    static async changePassword(newPassword: string): Promise<any> {
        const req = new Request(Endpoints.UPDATE_PASSWORD, {
            method: 'PUT',
            headers: {
                'accept': 'application/json',
                'Content-Type': 'application/json',
                'Authorization': `Bearer ${Session.getInstance().token}`
            },
            body: JSON.stringify({
                    "id": 0,
                    "new_password": newPassword
            })
        })
        const response = await fetch(req)
        .then(res => {
            if (res.status === 200)
                return res
            else {
                throw new Error(res.statusText)
            }
        }, () => { 
            throw new ServerOfflineError('Servidor offline, tente novamente mais tarde') 
        })
        const res = await response.json()
        return await res.access_token;
    }

    static async deleteAccount(id: number): Promise<boolean> {
        const req = new Request(Endpoints.DELETE_ACCOUNT, {
            method: 'DELETE',
            headers: {
                'accept': 'application/json',
                'Content-Type': 'application/json',
                'Authorization': `Bearer ${Session.getInstance().token}`
            },
            body: JSON.stringify({
                    "id": id
            })
        })
        const response = await fetch(req)
        .then(res => {
            if (res.status === 200)
                return res
            else {
                throw new Error(res.statusText)
            }
        }, () => { 
            throw new ServerOfflineError('Servidor offline, tente novamente mais tarde') 
        })
        const res = await response.json()
        return await res;

    }

    static async changeName(newName: string): Promise<any> {
        const req = new Request(Endpoints.DELETE_ACCOUNT, {
            method: 'PUT',
            headers: {
                'accept': 'application/json',
                'Content-Type': 'application/json',
                'Authorization': `Bearer ${Session.getInstance().token}`
            },
            body: JSON.stringify({
                    "id": 0,
                    "name": newName
            })
        })
        const response = await fetch(req)
        .then(res => {
            if (res.status === 200)
                return res
            else {
                throw new Error(res.statusText)
            }
        }, () => { 
            throw new ServerOfflineError('Servidor offline, tente novamente mais tarde') 
        })
        const res = await response.json()
        return await res.access_token;

    }
}

export default Auth;