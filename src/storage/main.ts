import { UserStorage } from "./mongo/user"
import { CategoryStorage } from "./mongo/category"
import { PostStorage } from "./mongo/post"

interface IStorage {
    user: UserStorage
    category: CategoryStorage
    post: PostStorage
}

export let storage: IStorage = {
    user: new UserStorage(),
    category: new CategoryStorage(),
    post: new PostStorage()
}
