import getAnimals from "../../../../../server/mongodb/actions/readAnimals";

export default async function handler(req, res) {
   let animals
    if (req.method == 'GET') {
        try {
            adminAuth(req)
        } catch (e) {
            return res.status(400).send("Not logged in as an admin")
        }
        
        try {
            animals = await getAnimals(req)
        } catch (e) {
            return res.status(500).send("Unable to get animals")
        }

        animals = animals.map(getInfo);

        function getInfo(animal) {
            return "Name: " + animal.name + ", Hours: " + animal.hoursTrained
        }

        return res.status(200).send(animals)
    }
    return res.status(400).send("Incorrect req method type")
}