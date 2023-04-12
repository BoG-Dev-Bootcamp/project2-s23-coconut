import { verify } from "jsonwebtoken"

export default function adminAuth(req) {
    const jwt = req.cookies.OurJWT
    if (!jwt) {
        throw new Error("Please Login first")
    }
    try {
        const decoded = verify(jwt, process.env.SECRET)
        if (decoded._id == "64306701ede2915796667495") {
            return decoded
        } else {
            throw new Error("Not an admin")
        }
    } catch (e) {
        throw new Error("Token is invalid")
    }
}