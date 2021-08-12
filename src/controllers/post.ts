import { NextFunction, Request, Response } from "express"
import { hasPermission } from "../middlewares/hasPermission"
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

    create = catchAsync(async (req: any, res: Response, next: NextFunction) => {
        const post = await storage.post.create({ ...req.body })

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
