import getUsers from "../../../server/mongodb/actions/getUsers";

/*
 * Returns all the users in the database WITHOUT their passwords
 */
export default async function handler(req, res) {
    /*
    "I think there’s supposed to be an admin endpoint for
    each schema (admin/users, admin/dogs) and based on
    query Params specific pages (or lists of users, dogs,
    etc) would be returned as json
    
    admin/users?page=1 would give the first 10 users
    */
    if (req.method == 'GET') {
        try {
            await getUsers(req)
        } catch (e) {
            return res.status(500).send("Unable to get users")
        }
        return res.status(200).send("Successfully returned users")
    }
    return res.status(400).send("Incorrect req method type")
}