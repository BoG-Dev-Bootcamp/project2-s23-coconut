export default async function handler(req, res) {
    if (req.method == 'GET') {
        try {
            return res.status(200).json({"healthy": true})
        } catch (error) {
            console.log(error)
            return res.status(500).json({"healthy": false})
        }
    }
    return res.status(400).send("Incorrect req method type")
}