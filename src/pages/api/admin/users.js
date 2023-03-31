/*
 * Returns all the users in the database WITHOUT their passwords.
 */
export default async function handler(req, res) {
    if (req.method == 'GET') {
        await connectDB()

        // while next user document is not empty?
        cursor = db.students.find().limit(10)

        // if no documents left to return
        if 

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