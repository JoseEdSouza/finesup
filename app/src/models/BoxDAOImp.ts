import Box from "./Box"
import BoxDAO from "./BoxDAO"



export class BoxDAOImp implements BoxDAO {
    static instance: BoxDAO | null = null
    static getInstace(): BoxDAO {
        if (this.instance == null)
            this.instance = new BoxDAOImp()
        return this.instance
    }

    add(box: Box): Promise<void> {

    }

    update(userId: number, name: string, box: Box): Promise<void> {

    }

    delete(userId: number, name: string): Promise<void> {

    }

    get(userId: number, name: string): Promise<Box> {

    }

    getAll(userId: number): Promise<Box[]> {

    }
}

export default BoxDAOImp