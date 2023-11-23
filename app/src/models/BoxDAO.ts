import Box from './Box'
import ApiSettings from "../config/ApiSettings"
import { Nullable } from "../types"

export class BoxDAO {

    async get(userId: number, name: string): Promise<Nullable<Box>> {
        const req: Request = new Request(`${ApiSettings.BASEURL}/box/${userId}/${name}`)
        const response: Response = await fetch(req)
        if (response.status !== 200) {
            throw new Error('Box not found')
        }
        const box: any = await response.json()
        return Box.fromJson(box)
    }

    async getAll(userId: number): Promise<Box[]> {
        const req: Request = new Request(`${ApiSettings.BASEURL}/all/box/${userId}`)
        const response: Response = await fetch(req)
        if (response.status !== 200) {
            throw new Error('user not found')
        }
        const boxes: any = await response.json()
        return Box.fromJsonArray(boxes)
    }

    async add(box: Box): Promise<Nullable<Box>> {
        const req: Request = new Request(`${ApiSettings.BASEURL}/box`, {
            method: 'POST',
            body: box.toString(),
            headers: { 'Content-Type': 'application/json' }
        })
        const response: Response = await fetch(req)
        if (response.status !== 200) {
            throw new Error(response.statusText)
        }
        const addedBox: any = await response.json()
        return Box.fromJson(addedBox)
    }

    async update(userId: number, name: string, box: Box): Promise<Nullable<Box>> {
        const req: Request = new Request(`${ApiSettings.BASEURL}/box/${userId}/${name}`, {
            method: 'PUT',
            body: JSON.stringify(box.toJson()),
            headers: { 'Content-Type': 'application/json' }
        })
        const response: Response = await fetch(req)
        if (response.status !== 200) {
            throw new Error(response.statusText)
        }
        const updatedBox: any = await response.json()
        return Box.fromJson(updatedBox)
    }

    async remove(userId: number, name: string): Promise<boolean> {
        const req: Request = new Request(`${ApiSettings.BASEURL}/box/${userId}/${name}`, {
            method: 'DELETE'
        })
        const response: Response = await fetch(req)
        console.log(response.status, response.statusText)
        return response.status === 200
    }
}


export default BoxDAO