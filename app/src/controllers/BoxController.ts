import { fetch, Response, Request } from 'undici'
import Box from '../models/Box'
import ApiSettings from "../config/ApiSettings"

type Nullable<T> = T | null

export class BoxController {
    async get(userId: number, name: string): Promise<Nullable<Box>> {
        const response = await fetch(`${ApiSettings.BASEURL}/box/${userId}/${name}`)
        if (response.status !== 200) {
            throw new Error('Box not found')
        }
        const box: any = await response.json()
        return new Box(box.user_id, box.name, box.description, box.actual_value, box.final_value, box.concluded)
    }

    async getAll(userId: number): Promise<Box[]> {
        const response = await fetch(`${ApiSettings.BASEURL}/all/box/${userId}`)
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
        const response = await fetch(`${ApiSettings.BASEURL}/box`, {
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
        if (response.status !== 200) {
            throw new Error('Failed to add box')
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
}


export default BoxController
