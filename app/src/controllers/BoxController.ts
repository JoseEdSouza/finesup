import { fetch, Response, Request } from 'undici'
import Box from '../models/Box'
import ApiSettings from "../config/ApiSettings"

type Nullable<T> = T | null

export class BoxController {

    async get(userId: number, name: string): Promise<Nullable<Box>> {
        const req:Request = new Request(`${ApiSettings.BASEURL}/box/${userId}/${name}`)
        const response:Response = await fetch(req)
        if (response.status !== 200) {
            throw new Error('Box not found')
        }
        const box: any = await response.json()
        return new Box(box.user_id, box.name, box.description, box.actual_value, box.final_value, box.concluded)
    }

    async getAll(userId: number): Promise<Box[]> {
        const req:Request = new Request(`${ApiSettings.BASEURL}/all/box/${userId}`)
        const response:Response = await fetch(req)
        if (response.status !== 200) {
            throw new Error('user not found')
        }
        const boxes: any = await response.json()
        return boxes.map((box: any) => new Box(
            box.user_id,
            box.name,
            box.description,
            box.actual_value,
            box.final_value,
            box.concluded))
    }

    async add(box: Box): Promise<Nullable<Box>> {
        const req:Request = new Request(`${ApiSettings.BASEURL}/box`,{
            method: 'POST',
            body: JSON.stringify({
                user_id: box.userId,
                name: box.name,
                description: box.description,
                actual_value: box.actualValue,
                final_value: box.finalValue,
                concluded: box.concluded
            }),
            headers: { 'Content-Type': 'application/json' }
        })
        const response:Response = await fetch(req)
        if (response.status !== 200) {
            throw new Error(response.statusText)
        }
        const addedBox: any = await response.json()
        return new Box(
            addedBox.user_id,
            addedBox.name,
            addedBox.description,
            addedBox.actual_value,
            addedBox.final_value,
            addedBox.concluded)
    }

    async update(userId: number, name: string, box: Box): Promise<Nullable<Box>> {
        const req:Request = new Request(`${ApiSettings.BASEURL}/box/${userId}/${name}`, {
            method: 'PUT',
            body: JSON.stringify({
                user_id: box.userId,
                name: box.name,
                description: box.description,
                actual_value: box.actualValue,
                final_value: box.finalValue,
                concluded: box.concluded
            }),
            headers: { 'Content-Type': 'application/json' }
        })
        const response:Response = await fetch(req)
        if (response.status !== 200) {
            throw new Error(response.statusText)
        }
        const updatedBox: any = await response.json()
        return new Box(
            updatedBox.user_id,
            updatedBox.name,
            updatedBox.description,
            updatedBox.actual_value,
            updatedBox.final_value,
            updatedBox.concluded)
    }

    async remove(userId: number, name: string): Promise<boolean> {
        const req:Request = new Request(`${ApiSettings.BASEURL}/box/${userId}/${name}`, {
            method: 'DELETE'
        })
        const response:Response = await fetch(req)
        if (response.status !== 200) {
            throw new Error(response.statusText)
        }
        return response.status === 200
    }
}


export default BoxController
