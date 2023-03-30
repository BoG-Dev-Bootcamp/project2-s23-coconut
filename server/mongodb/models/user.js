import mongoose from "mongoose"

const userSchema = new mongoose.Schema({
    /*
    From Schemas.md:
    User {
    _id: ObjectId // user's ID
    firstName: string // user's first name
    lastName: string // user's last name
    email: string // user's email
    password: string // user's password used only in level 3 and beyond
    profilePicture?: string // pointer to user's profile picture in cloud storage --> used in Expert level
    }
    */
   
    // "By default, Mongoose adds an _id property to your schemas."
    firstName: {
        type    : String,
        required: true
    },
    lastName: {
        type    : String,
        required: true
    },
    email: {
        type    : String,
        required: true
    },
    password: {
        type    : String,
        required: true
    },
    profilePicture: {
        type    : String
        // required: false
    }
})

export default mongoose.models?.User || mongoose.model("User", userSchema)