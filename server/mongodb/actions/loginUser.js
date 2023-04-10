import connectDB from "../index.js"
import User from "../models/user.js"
import bcrypt from "bcryptjs"

export default async function login(req) {
    await connectDB()

    const { email, password } = req.body
    
    const user = await User.findOne({ email }, {"password":1, "_id":1})

    let result

    return {result : result = await bcrypt.compare(password, user.password ), _id : JSON.stringify(user._id)}
}