import { NextFunction, Request, Response } from "express"
import { storage } from "../storage/main"
import catchAsync from "../utils/catchAsync"

export class PostController {
    getAll = catchAsync(async (req: Request, res: Response, next: NextFunction) => {
        const categorys = await storage.post.find(req.query)
        res.status(200).json({ success: true, data: { categorys } })
    })

    get = catchAsync(async (req: Request, res: Response, next: NextFunction) => {
        const post = await storage.post.findById(req.params.id)

        res.status(200).json({ success: true, data: { post } })
    })

    create = catchAsync(async (req: Request, res: Response, next: NextFunction) => {
        const user = await storage.user.findOne({ phone: res.locals.user })

        const post = await storage.post.create({ ...req.body, author: user._id })

        res.status(201).json({ success: true, data: { post } })
    })

    update = catchAsync(async (req: Request, res: Response, next: NextFunction) => {
        const post = await storage.post.update(req.params.id, req.body)

        res.status(200).json({ success: true, data: { post } })
    })

    delete = catchAsync(async (req: Request, res: Response, next: NextFunction) => {
        await storage.post.delete(req.params.id)

        res.status(204).json({ success: true, data: null })
    })
}
