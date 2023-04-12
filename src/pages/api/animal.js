import createAnimal from "../../../server/mongodb/actions/createAnimal";
import auth from "../../../server/utils/auth"

export default async function handler(req, res) {
    if (req.method == 'POST') {
        try {
            auth(req)
        } catch (e) {
            return res.status(400).send("Please log in first")
        }
        try {
            return await createAnimal(req.body, auth(req)._id, res)
        } catch (e) {
            return res.status(500).send("Unable to save animal")
        }
    }
    return res.status(400).send("Incorrect req method type")
}