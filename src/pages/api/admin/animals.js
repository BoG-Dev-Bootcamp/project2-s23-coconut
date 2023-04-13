import getAnimals from "../../../../server/mongodb/actions/readAnimals";
import adminAuth from "../../../../server/utils/adminAuth"

export default async function handler(req, res) {
    let animals;
    if (req.method == 'GET') {
        try {
            adminAuth(req)
        } catch (e) {
            return res.status(400).send("Please log in first")
        }
        try {
            animals = await getAnimals(req)
        } catch (e) {
            return res.status(500).send("Unable to get animals")
        }
        return res.status(200).send(animals)
    }
    return res.status(400).send("Incorrect req method type")

}