import { object } from "joi"
import mongoose, { Schema, Document } from "mongoose"
import { v4 as uuidv4 } from "uuid"

export interface IUser extends Document {
    _id: string
    firstName: string
    lastName: string
    phone: number
    role: any
    password: string
    intgerested_categories: string[]
}

let roles = {
    admin: {
        name: "admin",
        operations: ["create", "edit", "delete", "read"]
    },
    user: {
        name: "user",
        operations: ["read"]
    }
}

let userSchema = new mongoose.Schema({
    _id: {
        type: String,
        default: uuidv4
    },
    firstName: {
        type: String,
        required: true
    },
    lastName: {
        type: String,
        required: true
    },
    phone: {
        type: Number,
        required: true,
        unique: true
    },
    role: {
        type: Object,
        default: roles.user
    },
    password: {
        type: String,
        required: true
    },
    intgerested_categories: [
        {
            type: mongoose.SchemaTypes.ObjectId,
            ref: "Category"
        }
    ]
})

export default mongoose.model<IUser>("User", userSchema)
