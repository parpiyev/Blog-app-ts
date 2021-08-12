import jwt from "jsonwebtoken"
import config from "./config"

require("dotenv").config()

async function generateToken(data: any) {
    let token = await jwt.sign(data, config.JwtSecret)
    return token
}

async function verifyToken(token: any) {
    let isToken = await jwt.verify(token, config.JwtSecret)
    return isToken
}

export { generateToken, verifyToken }
