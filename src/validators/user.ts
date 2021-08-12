import Joi, { string } from "joi"
import { NextFunction, Request, Response } from "express"
import catchAsync from "../utils/catchAsync"

export class UserValidator {
    keys = {
        required: "required",
        optional: "optional"
    }

    createSchema = Joi.object({
        firstName: Joi.string().required(),
        lastName: Joi.string(),
        phone: Joi.number().required(),
        password: Joi.string().required()
    })

    updateSchema = Joi.object({
        firstName: Joi.string().required(),
        lastName: Joi.string(),
        phone: Joi.number().required(),
        password: Joi.string()
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
