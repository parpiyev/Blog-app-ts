// import { NextFunction, Request, Response } from "express"
const { verifyToken } = require("../config/jwt")
import { storage } from "../storage/main"

function hasPermission(operation: any) {
    return async (req: any, res: any, next: any) => {
        let token = await verifyToken(req.headers.authorization)

        if (!token) res.status(403).json({ success: false, message: "Token not found!" })

        let user = await storage.user.findOne({ phone: token.phone })
        if (!user) res.status(403).json({ success: false, message: "User not found!" })

        if (user.role.operations.indexOf(operation) != -1) {
            next()
        } else {
            res.status(403).json({
                success: false,
                message: "You do not have permission to this operation!"
            })
        }
    }
}

export { hasPermission }
