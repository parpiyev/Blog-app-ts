import { Router } from "express"
import { hasPermission } from "../middlewares/hasPermission"
import { PostController } from "../controllers/post"
import { PostValidator } from "../validators/post"

const router = Router({ mergeParams: true })
const controller = new PostController()
const validator = new PostValidator()

router
    .route("/")
    .get(hasPermission("read"), controller.getAll)
    .post(hasPermission("create"), validator.create, controller.create)
router
    .route("/:id")
    .get(hasPermission("read"), controller.get)
    .patch(hasPermission("edit"), validator.update, controller.update)
    .delete(hasPermission("delete"), controller.delete)

export default router
