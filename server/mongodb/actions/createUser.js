import connectDB from "../index.js"
import Training from "../models/training.js"

export default async function createUser(userData) {
    await connectDB()
    try {
        const training = new User(userData)
        await training.save()
    } catch (e) {
        throw new Error("Unable to create training log. Invalid data")
    }
}