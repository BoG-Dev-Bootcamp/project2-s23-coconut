import connectDB from "../index.js"
import User from "../models/user.js"
import bcrypt from "bcryptjs"

export default async function login(req) {
    await connectDB()

    const { username, password } = req.body
    
    const user = await User.findOne({ username })

    return result = await bcrypt.compare(password, user.password)
}