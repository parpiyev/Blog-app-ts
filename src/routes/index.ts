import { Router } from "express"
import userRouter from "./user"
import loginRouter from "./login"
import categoryRouter from "./category"
import postRouter from "./post"

const router = Router({ mergeParams: true })

router.use("/user", userRouter)
router.use("/login", loginRouter)
router.use("/category", categoryRouter)
router.use("/post", postRouter)

export default router
