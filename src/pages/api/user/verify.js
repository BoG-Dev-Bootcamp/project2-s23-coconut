import login from "../../../../server/mongodb/actions/loginUser"
import verify from "../../../../server/mongodb/actions/verifyUser"

export default async function handler(req, res) {
    let result
    if (req.method == 'POST') {
        try {
            result = await login(req, res)
        } catch (e) {
            return res.status(500).send("Unable to find user")
        }
        if (result) {
            return verify(req, res)
        } else {
            return res.status(403).send("Incorrect email or password")
        }
    }
    return res.status(400).send("Incorrect req method type")
}