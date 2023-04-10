import { sign } from "jsonwebtoken"
import { serialize } from "cookie"

export default function verify(req, res) {
    try {
        const token = sign(req, process.env.SECRET, { expiresIn: '60s' })
    
        const serialized = serialize("OurJWT", token, {
            httpOnly: true,
            secure: false, // change this in production
            sameSite: "strict",
            maxAge: 60,
            path: "/"
        });
        res.setHeader('Set-Cookie', serialized)
        return res.status(200).send("JWT Created! " + token + " Successfully verified.")
    } catch (e) {
        console.log(e)
        return res.status(403).send("Unable to issue JWT")
    }
}