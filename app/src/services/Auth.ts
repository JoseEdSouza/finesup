import Endpoints from "../utils/Endpoints";

class Auth {

    static login(email: string, password: string): Promise<any> {

        const req = new Request(Endpoints.LOGIN, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({
                "email": email,
                "password": password
            })
        })

        return fetch(req)
            .then(res => res.json())
            .then(res => {
                if (res.status === 'ok') {
                    return res.body.acess_token;
                } else {
                    throw new Error(res.error);
                }
            });

    }

    static signup(name: string, email: string, password: string): Promise<any> {
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

        return fetch(req)
            .then(res => res.json())
            .then(res => {
                if (res.status === 'ok') {
                    return res.token;
                } else {
                    throw new Error(res.error);
                }
            });

    }
}

export default Auth;