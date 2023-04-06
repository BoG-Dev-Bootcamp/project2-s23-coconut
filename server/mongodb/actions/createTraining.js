import connectDB from "../index.js"
import Training from "../models/training.js"
import getUserByAnimalId from "./getUserByAnimalId.js"
import getUserById from "./getUserById.js"

export default async function createTraining(trainingData, res) {
    await connectDB()
    const training = new Training(trainingData)
    let user
    try {
        user = await getUserByAnimalId(training.animal)
    } catch (e) {
        return res.status(400).send("Unable to find animal's owner")
    }
    if (JSON.stringify(user[0].owner) == JSON.stringify(training.user)) {
        try {
            await training.save()
            return res.status(200).send("Successfully created a new training")
        } catch (e) {
            return res.status(400).send("Unable to create training log. Invalid data")
        }
    } else {
        return res.status(400).send("Unable to create training log. Wrong user to animal")
    }
}