import getTraining from "../../../../server/mongodb/actions/readTraining";
import adminAuth from "../../../../server/utils/adminAuth"

export default async function handler(req, res) {
    let training
    if (req.method == 'GET') {
        try {
            adminAuth(req)
        } catch (e) {
            return res.status(400).send("Not logged in as an admin")
        }
        try {
            training = await getTraining(req)
        } catch (e) {
            return res.status(500).send("Unable to get training logs")
        }
        return res.status(200).send(training)
    }
    return res.status(400).send("Incorrect req method type")

}