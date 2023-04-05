import connectDB from "../index.js"
import Animal from "../models/animal.js"

export default async function getAnimalById(identifier) {
    await connectDB()
    try {
        return await Animal.find(identifier)
    } catch (e) {
        throw new Error("Unable to find animal.")
    }
}