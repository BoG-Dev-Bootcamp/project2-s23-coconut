import login from "../../../../server/utils/loginUser"

export default async function handler(req, res) {
    let result
    if (req.method == 'POST') {
        try {
            result = await login(req)
        } catch (e) {
            console.log(e)
            return res.status(500).send("Unable to find user")
        }
        if (result) {
            return res.status(200).send("Successfully logged in")
        } else {
            return res.status(403).send("Incorrect email or password")
        }
    }
    return res.status(400).send("Incorrect req method type")
}