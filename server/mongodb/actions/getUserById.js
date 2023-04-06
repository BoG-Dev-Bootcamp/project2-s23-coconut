import connectDB from "../index.js"
import User from "../models/user.js"

export default async function getUserById(identifier) {
    await connectDB()
    try {
        return await User.find(identifier)
    } catch (e) {
        throw new Error("Unable to find user.")
    }
}