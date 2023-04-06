import connectDB from "../index.js"
import User from "../models/user.js"
import bcrypt from "bcryptjs"

export default async function createUser(userData) {
    await connectDB()
    try {
        const { firstName, lastName, email, password } = userData
        const salt = await bcrypt.genSalt(10)
        const hash = await bcrypt.hash(password, salt)
        const user = new User({firstName, lastName, email, password : hash})
        await user.save()
    } catch (e) {
        console.log(e)
        throw new Error("Unable to create user. Invalid data")
    }
}