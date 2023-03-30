import connectDB from "../index.js"
import Training from "../models/training.js"

export default async function createTraining(trainingData) {
    await connectDB()
    const training = new Training(trainingData)
    if (training.user._id == training.animal.owner._id) {
        try {
            await training.save()
        } catch (e) {
            return res.status(400).send("Unable to create training log. Invalid data")
        }
    } else {
        return res.status(400).send("Unable to create training log. Invalid data")
    }
}