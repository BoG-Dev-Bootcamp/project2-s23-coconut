import login from "../../../../server/mongodb/actions/loginUser"

export default async function handler(req, res) {
    if (req.method == 'POST') {
        try {
            await login(req)
        } catch (e) {
            return res.status(403).send("Incorrect email or password")
        }
        return res.status(200).send("Successfully logged in")
    }

}