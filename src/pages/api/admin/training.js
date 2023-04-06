import getTraining from "../../../../server/mongodb/actions/getTraining";

export default async function handler(req, res) {
    let training
    if (req.method == 'GET') {
        try {
            training = await getTraining(req)
        } catch (e) {
            return res.status(500).send("Unable to get training logs")
        }
        console.log(training)
        return res.status(200).send("Successfully returned training logs")
    }
    return res.status(400).send("Incorrect req method type")

}