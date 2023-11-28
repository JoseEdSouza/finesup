import Box from './Box'
import Session from '../services/Session'
import Endpoints from '../utils/Endpoints'
import ServerOfflineError from '../utils/Error'

export class BoxDAO {
    private headers = {
        'accept': 'application/json',
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${this.session.token}`
    }
    private get session() {
        return Session.getInstance()
    }

    async get(name: string): Promise<Box> {
        const req: Request = new Request(`${Endpoints.BOX}/${name}`, {
            method: 'GET',
            headers: this.headers

        })
        const response: Response = await fetch(req).catch(() => {
            throw new ServerOfflineError('Servidor offline, tente novamente mais tarde')
        })
        if (response.status === 404) {
            throw new Error('Item not found')
        } else if (response.status !== 200) {
            throw new Error(response.statusText)
        }
        const box: any = await response.json()
        return Box.fromJson(box)
    }

    async getAll(): Promise<Box[]> {
        const req: Request = new Request(Endpoints.BOX_ALL, {
            method: 'GET',
            headers: this.headers
        })
        const response: Response = await fetch(req).catch(() => {
            throw new ServerOfflineError('Servidor offline, tente novamente mais tarde')
        })
        if (response.status === 404) {
            throw new Error('Item not found')
        } else if (response.status !== 200) {
            throw new Error(response.statusText)
        }
        const boxes: any = await response.json()
        return Box.fromJsonArray(boxes)
    }

    async add(box: Box): Promise<Box> {
        const req: Request = new Request(Endpoints.BOX, {
            method: 'POST',
            body: box.toString(),
            headers: this.headers
        })
        const response: Response = await fetch(req).catch(() => {
            throw new ServerOfflineError('Servidor offline, tente novamente mais tarde')
        })
        if (response.status !== 200) {
            throw new Error(response.statusText)
        }
        const addedBox: any = await response.json()
        return Box.fromJson(addedBox)
    }

    async update(name: string, box: Box): Promise<Box> {
        const req: Request = new Request(`${Endpoints.BOX}/${name}`, {
            method: 'PUT',
            body: JSON.stringify(box.toJson()),
            headers: this.headers
        })
        const response: Response = await fetch(req).catch(() => {
            throw new ServerOfflineError('Servidor offline, tente novamente mais tarde')
        })
        if (response.status !== 200) {
            throw new Error(response.statusText)
        }
        const updatedBox: any = await response.json()
        return Box.fromJson(updatedBox)
    }

    async remove(name: string): Promise<boolean> {
        const req: Request = new Request(`${Endpoints.BOX}/${name}`, {
            method: 'DELETE',
            headers: this.headers
        })
        const response: Response = await fetch(req).catch(() => {
            throw new ServerOfflineError('Servidor offline, tente novamente mais tarde')
        })
        console.log(response.status, response.statusText)
        return response.status === 200
    }
}


export default BoxDAO