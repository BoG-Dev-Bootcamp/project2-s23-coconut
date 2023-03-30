import createAnimal from "../../../server/mongodb/actions/createAnimal";

export default async function handler(req, res) {
    if (req.method == 'POST') {
        try {
            await createTraining(req.body)
        } catch (e) {
            return res.status(500).send("Unable to save animal")
        }
        return res.status(200).send("Successfully created a new animal")
    }
    return res.status(400).send("Incorrect req method type")

}