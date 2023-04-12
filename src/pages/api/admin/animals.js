import getAnimals from "../../../../server/mongodb/actions/readAnimals";
import auth from "../../../server/utils/auth"

export default async function handler(req, res) {
    let animals;
    if (req.method == 'GET') {
        try {
            auth(req)
        } catch (e) {
            return res.status(400).send("Please log in first")
        }
        try {
            animals = await getAnimals(req)
        } catch (e) {
            return res.status(500).send("Unable to get animals")
        }
        console.log(animals)
        return res.status(200).send("Successfully returned animals")
    }
    return res.status(400).send("Incorrect req method type")

}