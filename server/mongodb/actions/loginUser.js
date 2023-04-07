import connectDB from "../index.js"
import User from "../models/user.js"
import bcrypt from "bcryptjs"

export default async function login(req) {
    await connectDB()

    const { email, password } = req.body
    
    const user = await User.findOne({ email })

    let result

    return result = await bcrypt.compare(password, user.password )
}