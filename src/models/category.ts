import mongoose from "mongoose"
import { v4 as uuidv4 } from "uuid"

export interface ICategory extends Document {
    _id: string
    name: string
    createdAt: Date
}

const categorySchema = new mongoose.Schema({
    _id: {
        type: String,
        default: uuidv4
    },
    name: {
        type: String,
        required: true
    },
    createdAt: {
        type: Date,
        default: Date.now
    }
})

export default mongoose.model<ICategory>("Category", categorySchema)
