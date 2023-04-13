import connectDB from "../index.js"
import Animal from "../models/animal.js"

export default async function createAnimal(animalData, owner, res) {
    await connectDB()
    try {
        const { name, hoursTrained, dateOfBirth } = animalData
        const data = {name, hoursTrained, dateOfBirth, owner}
        const animal = new Animal(data)
        await animal.save()
        return res.status(200).send("Successfully created a new animal")
    } catch (e) {
        console.log(e)
        return res.status(400).send("Unable to create animal. Invalid data")
    }
}