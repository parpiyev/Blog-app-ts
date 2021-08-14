import { string } from "joi"
import mongoose from "mongoose"
import { v4 as uuidv4 } from "uuid"

export interface IPost extends Document {
    _id: string
    title: string
    content: string
    rating: number
    free: boolean
    author: string
    category: string
}

const postSchema = new mongoose.Schema({
    _id: {
        type: String,
        default: uuidv4
    },
    title: {
        type: String,
        required: true
    },
    content: {
        type: String,
        required: true
    },
    rating: {
        type: Number,
        default: 0,
        min: 0,
        max: 5,
        set: (val: number) => Math.round(val * 10) / 10
    },
    free: {
        type: Boolean,
        default: true
    },
    author: {
        type: String,
        ref: "User"
    },
    category: {
        type: String,
        ref: "Category"
    },
    createdAt: {
        type: Date,
        default: Date.now(),
        select: false
    }
})

postSchema.index({ price: 1, ratingaAverage: -1 })

export default mongoose.model<IPost>("Post", postSchema)
