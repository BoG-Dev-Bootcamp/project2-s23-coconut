import getTraining from "../../../../../server/mongodb/actions/readTraining";

export default async function handler(req, res) {
   let training
    if (req.method == 'GET') {
        try {
            training = await getTraining(req)
        } catch (e) {
            return res.status(500).send("Unable to get training logs")
        }
        let trainingNames = []
        for (let i = 0; i < training.length; i++) {
            if (i != training.length - 1) {
                trainingNames[i] = training[i].description + ", Hours: " + training[i].hours + " / "
            } else {
                trainingNames[i] = training[i].description + " Hours: " + training[i].hours
            }        
        }
        return res.status(200).send(trainingNames)
    }
    return res.status(400).send("Incorrect req method type")
}