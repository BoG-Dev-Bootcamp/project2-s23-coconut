import connectDB from "../index.js"
import User from "../models/user.js"
import bcrypt from "bcryptjs"

export default async function createUser(userData, res) {
    await connectDB()
    try {
        const { firstName, lastName, email, password } = userData
        const salt = await bcrypt.genSalt(10)
        const hash = await bcrypt.hash(password, salt)
        const user = new User({firstName, lastName, email, password : hash})
        await user.save()
        return res.status(200).send("Successfully created a user")
    } catch (e) {
        return res.status(400).send("Unable to create user. Invalid data")
    }
}