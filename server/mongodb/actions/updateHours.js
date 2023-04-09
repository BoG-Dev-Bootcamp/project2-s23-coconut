import connectDB from "../index.js"
import Animal from "../models/animal.js"

export default async function updateHours(identifier, hours) {
    await connectDB()
    try {
        await Animal.updateOne({"_id" : identifier}, {$inc : {"hoursTrained" : hours}})
    } catch (e) {
        console.log(e)
    }
}