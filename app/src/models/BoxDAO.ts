import Box from './Box'
import Session from '../services/Session'
import Endpoints from '../utils/Endpoints'

export class BoxDAO {

    get session(){
        return Session.getInstance()
    }

    async get(name: string): Promise<Box> {
        const req: Request = new Request(`${Endpoints.BOX}/${name}`, {
            method: 'GET',
            headers: {
                contentType: 'application/json',
                Authorization: `Bearer ${this.session.token}`
            }

        })
        const response: Response = await fetch(req)
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
            headers: {
                contentType: 'application/json',
                Authorization: `Bearer ${this.session.token}`
            }
        })
        const response: Response = await fetch(req)
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
            headers: {
                contentType: 'application/json',
                Authorization: `Bearer ${this.session.token}`
            }
        })
        const response: Response = await fetch(req)
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
            headers: {
                contentType: 'application/json',
                Authorization: `Bearer ${this.session.token}`
            }
        })
        const response: Response = await fetch(req)
        if (response.status !== 200) {
            throw new Error(response.statusText)
        }
        const updatedBox: any = await response.json()
        return Box.fromJson(updatedBox)
    }

    async remove(name: string): Promise<boolean> {
        const req: Request = new Request(`${Endpoints.BOX}/${name}`, {
            method: 'DELETE',
            headers: {
                contentType: 'application/json',
                Authorization: `Bearer ${this.session.token}`
            }
        })
        const response: Response = await fetch(req)
        console.log(response.status, response.statusText)
        return response.status === 200
    }
}


export default BoxDAO