import connectDB from "../index.js"
import Animal from "../models/animal.js"
import User from "../models/user.js"

export default async function getUserByAnimalId(identifier) {
    await connectDB()
    let animal
    try {
        animal = await Animal.find(identifier)
    } catch (e) {
        throw new Error("Unable to find animal.")
    }
    try {
        return await User.find(animal.owner)
    } catch (e) {
        throw new Error("Unable to find user.")
    }
}