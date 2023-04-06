import connectDB from "../index.js"
import Animal from "../models/animal.js"

export default async function createAnimal(animalData, res) {
    await connectDB()
    try {
        const animal = new Animal(animalData)
        await animal.save()
        return res.status(200).send("Successfully created a new animal")
    } catch (e) {
        return res.status(400).send("Unable to create animal. Invalid data")
    }
}

middleware(req, allowedMethods)