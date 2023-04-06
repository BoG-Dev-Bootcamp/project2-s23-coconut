import connectDB from "../index.js"
import Animal from "../models/animal.js"
import User from "../models/user.js"

export default async function getUserByAnimalId(identifier) {
    await connectDB()
    try {
        return await Animal.find(identifier, {"owner":1, "_id":0})
    } catch (e) {
        throw new Error("Unable to find animal.")
    }
}