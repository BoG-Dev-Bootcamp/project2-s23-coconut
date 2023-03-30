import connectDB from "../index.js"
import Animal from "../models/animal.js"

export default async function createAnimal(animalData) {
    await connectDB()
    try {
        const animal = new Animal(animalData)
        await animal.save()
    } catch (e) {
        throw new Error("Unable to create animal. Invalid data")
    }
}