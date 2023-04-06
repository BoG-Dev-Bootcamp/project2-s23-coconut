import auth from "../../../../server/utils/auth"

export default async function handler(req, res) {
    if (req.method == 'POST') {
        try {
            const token = sign({ admin: true }, process.env.SECRET, { expiresIn: '60s' })
    
            const serialized = serialize("OurJWT", token, {
                httpOnly: true,
                secure: false, // change this in production
                sameSite: "strict",
                maxAge: 60,
            });
            res.setHeader('Set-Cookie', serialized)
            res.status(200).send("JWT Created! " + token)
        }
        catch (e) {
            return res.status(400).send(e.message)
        }
    }
}