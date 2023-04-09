import createUser from "../../../server/mongodb/actions/createUser"
import auth from "../../../server/utils/auth"

export default async function handler(req, res) {
    try {
        auth(req)
        return res.status(400).send("Already logged in")
    } catch (e) {
        if (req.method == 'POST') {
            try {
                return await createUser(req.body, res)
            } catch (e) {
                return res.status(500).send("Unable to save user")
            }
        }
        return res.status(400).send("Incorrect req method type")
    }
}