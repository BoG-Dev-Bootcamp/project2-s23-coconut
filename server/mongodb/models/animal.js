import mongoose from "mongoose"

const animalSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    hoursTrained: {
        type: Number,
        required: true
    },
    owner: { type: mongoose.Schema.Types.ObjectId, ref: 'User' },
    dateOfBirth: {
        type: Date,
        required: true
    },
    profilePicture: {
        type: String
    },
})

export default mongoose.models?.Animal || mongoose.model("Animal", animalSchema)