import connectDB from "../index.js"
import User from "../models/user.js"

/* (6) Create a GET endpoint at /api/admin/users which will
return all of the users in the database (not with their passwords) */
export default async function getUsers(req) {
    await connectDB()
    try {
        // page number, i.e. admin/users?page=2
        const page_number = req.query.page

        /* "cursor" just references how we "move"
        through pages, e.g. scrolling through them.
        it's similar to going through a tree by
        setting a node called curr & updating it */
        const cursor = await User.find({ 'password': 0 }).limit(10)

        // { 'password': 0 } excludes the password field from returned docs

        /* since we already found the first 10 users,
        we're already on page 1 */
        const current_page = 1

        const last_id = undefined

        /* while we still have data to return AND find() doesn't
        return an empty array */
        while (cursor.length != 0 && current_page < page_number) {
            last_id = cursor[9]._id
            cursor = await User.find({'_id': {'$gt': last_id}}, {'password': 0}).limit(10)
            current_page++
        }

        return cursor
    } catch (e) {
        throw new Error("Unable to find users.")
    }
}