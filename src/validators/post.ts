import Joi, { string } from "joi"
import { NextFunction, Request, Response } from "express"
import catchAsync from "../utils/catchAsync"

export class PostValidator {
    keys = {
        required: "required",
        optional: "optional"
    }

    createSchema = Joi.object({
        title: Joi.string().required(),
        content: Joi.string().required(),
        rating: Joi.number(),
        free: Joi.boolean(),
        category: Joi.string()
    })

    updateSchema = Joi.object({
        title: Joi.string().required(),
        content: Joi.string().required(),
        rating: Joi.number(),
        free: Joi.boolean()
    })

    create = catchAsync(async (req: Request, res: Response, next: NextFunction) => {
        const { error } = this.createSchema.validate(req.body)
        if (error) return next(error)

        next()
    })

    update = catchAsync(async (req: Request, res: Response, next: NextFunction) => {
        const { error } = this.updateSchema.validate(req.body)
        if (error) return next(error)

        next()
    })
}
