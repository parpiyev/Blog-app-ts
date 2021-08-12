import { Router } from "express"
import { UserController } from "../controllers/user"
import { UserValidator } from "../validators/user"

const router = Router({ mergeParams: true })
const controller = new UserController()
const validator = new UserValidator()

router.route("/").get(controller.getAll).post(validator.create, controller.create)
router
    .route("/:id")
    .get(controller.get)
    .patch(validator.update, controller.update)
    .delete(controller.delete)

export default router
