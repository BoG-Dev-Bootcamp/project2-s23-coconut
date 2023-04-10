import login from "../../../../server/mongodb/actions/loginUser"
import verify from "../../../../server/mongodb/actions/verifyUser"

export default async function handler(req, res) {
    if (req.method == 'POST') {
        try {
            const { result, _id } = await login(req, res)
            if (result) {
                return verify({_id}, res)
            } else {
                return res.status(403).send("Incorrect email or password")
            }
        } catch (e) {
            return res.status(500).send("Unable to find user")
        }
    }
    return res.status(400).send("Incorrect req method type")
}