import connectDB from "../index.js"
import User from "../models/user.js"

export default async function getUsers(req) {
    await connectDB()
    try {
        // page number, i.e. admin/users?page=2
        const page_number = req.query.page

        // "cursor" just references how we "move"
        // through pages, e.g. scrolling thru them
        const cursor = await User.find().limit(10)

        // since we already found the first 10 users,
        // we're already on page 1
        const current_page = 1
        const last_id = undefined

        // while we still have data to return AND find() doesn't
        // return an empty array
        while (cursor.length != 0 && current_page < page_number) {
            last_id = cursor[9]._id
            cursor = await User.find({'_id': {'$gt': last_id}}).limit(10)
            current_page++
        }

        return cursor
    } catch (e) {
        throw new Error("Unable to find users.")
    }
}