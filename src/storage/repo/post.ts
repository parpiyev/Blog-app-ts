import { IPost } from "../../models/post"

export interface IPostAllResponse {
    payloads: PostRepo[]
    count: number
}

export interface PostRepo {
    create(payload: IPost): Promise<IPost>
    update(id: string, payload: IPost): Promise<IPost>
    delete(id: string): Promise<any>
    find(query: Object): Promise<IPost[]>
    findOne(query: Object): Promise<IPost>
    findById(id: string): Promise<IPost>
}
