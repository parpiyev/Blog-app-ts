import { NextFunction, Request, Response } from "express"
import { storage } from "../storage/main"
import catchAsync from "../utils/catchAsync"

export class CategoryController {
    getAll = catchAsync(async (req: Request, res: Response, next: NextFunction) => {
        const categorys = await storage.category.find(req.query)

        res.status(200).json({ success: true, data: { categorys } })
    })

    get = catchAsync(async (req: Request, res: Response, next: NextFunction) => {
        const category = await storage.category.findById(req.params.id)

        res.status(200).json({ success: true, data: { category } })
    })

    create = catchAsync(async (req: Request, res: Response, next: NextFunction) => {
        const category = await storage.category.create({ ...req.body })

        res.status(201).json({ success: true, data: { category } })
    })

    update = catchAsync(async (req: Request, res: Response, next: NextFunction) => {
        const category = await storage.category.update(req.params.id, req.body)

        res.status(200).json({ success: true, data: { category } })
    })

    delete = catchAsync(async (req: Request, res: Response, next: NextFunction) => {
        await storage.category.delete(req.params.id)

        res.status(204).json({ success: true, data: null })
    })
}
