import getAnimals from "../../../../../server/mongodb/actions/readAnimals";

export default async function handler(req, res) {
   let animals
    if (req.method == 'GET') {
        try {
            animals = await getAnimals(req)
        } catch (e) {
            return res.status(500).send("Unable to get animals")
        }
        let animalNames = []
        for (let i = 0; i < animals.length; i++) {
            if (i != animals.length - 1) {
                animalNames[i] = animals[i].name + ", Hours: " + animals[i].hoursTrained + " / "
            } else {
                animalNames[i] = animals[i].name + ", Hours: " + animals[i].hoursTrained
            }        
        }
        return res.status(200).send(animalNames)
    }
    return res.status(400).send("Incorrect req method type")
}