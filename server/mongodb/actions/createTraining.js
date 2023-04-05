import connectDB from "../index.js"
import Training from "../models/training.js"
import getAnimalById from "./getAnimalById.js"
import getUserById from "./getUserById.js"

export default async function createTraining(trainingData) {
    await connectDB()
    const training = new Training(trainingData)
    let animal = training.animal
    try {
        animal = await getAnimalById(animal)
    } catch (e) {
        return res.status(400).send("Unable to find animal")
    }
    let user
    try {
        user = await getUserById(animal.owner)
    } catch (e) {
        return res.status(400).send("Unable to find animal")
    }
    console.log(training.user)
    if (training.user == user) {
        try {
            await training.save()
        } catch (e) {
            return res.status(400).send("Unable to create training log. Invalid data")
        }
    } else {
        return res.status(400).send("Unable to create training log. Invalid data")
    }
}