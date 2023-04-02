import connectDB from "../index.js"
import Training from "../models/training.js"

export default async function getTraining() {
    await connectDB()
    try {
        return await Training.find({})
    } catch (e) {
        throw new Error("Unable to find training logs.")
    }
}