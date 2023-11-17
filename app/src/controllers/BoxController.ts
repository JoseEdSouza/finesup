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
        const box:any = await response.json()
        return new Box(box.user_id, box.name, box.description, box.actual_value, box.final_value, box.concluded)
    }

    async getAll(userId: number): Promise<Box[]> {
        const response = await fetch(`${ApiSettings.BASEURL}/box/all/${userId}`)
        if (response.status !== 200) {
            throw new Error('user not found')
        }
        const boxes:any= await response.json()
        return boxes.map((box:any) => new Box(box.user_id, box.name, box.description, box.actual_value, box.final_value, box.concluded))
    }
}

export default BoxController

const c = new BoxController()
c.getAll(1).then(console.log).catch(console.error)
