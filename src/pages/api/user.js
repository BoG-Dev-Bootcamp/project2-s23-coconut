import createUser from "../../../server/mongodb/actions/createUser"

export default async function handler(req, res) {
    if (req.method == 'POST') {
        try {
            return await createUser(req.body, res)
        } catch (e) {
            return res.status(500).send("Unable to save user")
        }
    }
    return res.status(400).send("Incorrect req method type")
}