import { Router } from "express"
import { hasPermission } from "../middlewares/hasPermission"
import { CategoryController } from "../controllers/category"
import { CategoryValidator } from "../validators/category"

const router = Router({ mergeParams: true })
const controller = new CategoryController()
const validator = new CategoryValidator()

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
