import Endpoints from "../utils/Endpoints";

class Auth {

    static async login(email: string, password: string): Promise<any> {

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

        const response = await fetch(req)
            .then(res => {
                if (res.status === 200)
                    return res
                else {
                    throw new Error('Invalid credentials')
                }
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
            })
        const res = await response.json()
        return await res.access_token;

    }
}

export default Auth;