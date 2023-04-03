import mongoose from "mongoose"
import User from "../../../server/mongodb/models/user.js"

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
        //await connectDB()
        
        // empty list to hold all the users
        const users_list = []
        
        // page number, i.e. admin/users?page=2
        const page_number = req.query.page

        const cursor = User.find().limit(10)

        // since we already found the first 10 users,
        // we're already on page 1
        const current_page = 1

        while (cursor && current_page < page_number) {
            // logic to find last id
            User.find({'_id': {'$gt': last_id}}).limit(10)
            current_page++
        }

        return cursor // NOT THE ACTUAL STATEMENT PROBABLY

        try {
            return res.status(200).json({"healthy": true})
        } catch (error) {
            console.log(error)
            return res.status(500).json({"healthy": false})
        }
    }
    return res.status(400).send("Incorrect req method type")
}

/*
 * Python implementation of pagination from the referenced website

def idlimit(page_size, last_id=None):
        """Function returns `page_size` number of documents after last_id
        and the new last_id.
        """
        if last_id is None:
            # When it is first page
            cursor = db['students'].find().limit(page_size)
        else:
            cursor = db['students'].find({'_id': {'$gt': last_id}}).limit(page_size)

        # Get the data      
        data = [x for x in cursor]

        if not data:
            # No documents left
            return None, None

        # Since documents are naturally ordered with _id, last document will
        # have max id.
        last_id = data[-1]['_id']

        # Return data and last_id
        return data, last_id
*/