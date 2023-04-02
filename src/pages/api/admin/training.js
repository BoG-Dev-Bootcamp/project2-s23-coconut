import getTraining from "../../../server/mongodb/actions/getTraining";

export default async function handler(req, res) {
    if (req.method == 'GET') {
        try {
            await getTraining(req.body)
        } catch (e) {
            return res.status(500).send("Unable to get all training logs")
        }
        return res.status(200).send("Successfully returned all training logs")
    }
    return res.status(400).send("Incorrect req method type")

}