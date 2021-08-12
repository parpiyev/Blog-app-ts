import { NextFunction, Request, Response } from "express"
import bcrypt from "bcrypt"
import { storage } from "../storage/main"
import { generateToken } from "../config/jwt"
import catchAsync from "../utils/catchAsync"

export class UserController {
    getAll = catchAsync(async (req: Request, res: Response, next: NextFunction) => {
        const users = await storage.user.find(req.query)

        res.status(200).json({ success: true, data: { users } })
    })

    get = catchAsync(async (req: Request, res: Response, next: NextFunction) => {
        const user = await storage.user.findById(req.params.id)

        res.status(200).json({ success: true, data: { user } })
    })

    create = catchAsync(async (req: Request, res: Response, next: NextFunction) => {
        const salt = await bcrypt.genSalt()
        const hashPassword = await bcrypt.hash(req.body.password, salt)

        const user = await storage.user.create({ ...req.body, password: hashPassword })

        const token = await generateToken({ phone: user.phone })

        res.status(201).json({ success: true, token })
    })

    update = catchAsync(async (req: Request, res: Response, next: NextFunction) => {
        const user = await storage.user.update(req.params.id, req.body)

        res.status(200).json({ success: true, data: { user } })
    })

    delete = catchAsync(async (req: Request, res: Response, next: NextFunction) => {
        await storage.user.delete(req.params.id)

        res.status(204).json({ success: true, data: null })
    })
}
