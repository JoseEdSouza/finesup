import Box from "./Box"


export interface BoxDAO {
    add(box: Box): Promise<void>;
    update(userId:number,name:string,box: Box): Promise<void>;
    delete(userId:number,name:string): Promise<void>;
    get(userId:number,name:string): Promise<Box>;
    getAll(userId:number): Promise<Box[]>;
}

export default BoxDAO
