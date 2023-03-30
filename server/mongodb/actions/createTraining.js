import connectDB from "../index.js"
import Training from "../models/training.js"

export default async function createTraining(trainingData) {
    await connectDB()
    try {
        const training = new Training(trainingData)
        await training.save()
    } catch (e) {
        throw new Error("Unable to create training log. Invalid data")
    }
}