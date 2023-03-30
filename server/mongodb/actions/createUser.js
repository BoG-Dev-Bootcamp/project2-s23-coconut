import connectDB from "../index.js"
import User from "../models/user.js"

export default async function createUser(userData) {
    await connectDB()
    try {
        const user = new User(userData)
        await user.save()
    } catch (e) {
        throw new Error("Unable to create user. Invalid data")
    }
}