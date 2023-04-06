import connectDB from "../index.js"
import Training from "../models/training.js"
import getUserByAnimalId from "./getUserByAnimalId.js"
import getUserById from "./getUserById.js"

export default async function createTraining(trainingData) {
    await connectDB()
    const training = new Training(trainingData)
    let user
    try {
        user = await getUserByAnimalId(training.animal)
    } catch (e) {
        console.log(e)
        console.log("Unable to find animal")
    }
    if (JSON.stringify(user[0].owner) == JSON.stringify(training.user)) {
        try {
            await training.save()
        } catch (e) {
            console.log(e)
            return console.log("Unable to create training log. Invalid data")
        }
    } else {
        return console.log("Unable to create training log. Wrong user to animal.")
    }
}