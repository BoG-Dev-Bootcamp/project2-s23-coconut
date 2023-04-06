import createTraining from "../../../server/mongodb/actions/createTraining";

export default async function handler(req, res) {
    if (req.method == 'POST') {
        try {
            return await createTraining(req.body, res)
        } catch (e) {
            return res.status(500).send("Unable to save training log")
        }
    }
    return res.status(400).send("Incorrect req method type")
}