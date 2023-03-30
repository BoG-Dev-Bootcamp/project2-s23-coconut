import mongoose from "mongoose"

const trainingSchema = new mongoose.Schema({
    date: {
        type: String,
        required: true
    },
    description: {
        type: String,
        required: true
    },
    hours: {
        type: Integer,
        required: true
    },
    trainingLogVideo: {
        type: String
    },
    animal: [{ type: mongoose.Schema.Types.ObjectId, ref: 'Animal' }],
    user: [{ type: mongoose.Schema.Types.ObjectId, ref: 'User' }]
})

export default mongoose.models?.Training || mongoose.model("Training", trainingSchema)