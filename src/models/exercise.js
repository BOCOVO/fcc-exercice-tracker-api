const { Schema, model } = require("mongoose");

const MODEL_NAME = "Exercise"

const exerciseSchema = new Schema({
    description: {
        type: String,
        required: true
    },
    duration: {
        type: Number,
        required: true
    },
    date: {
        type: Date,
        required: true,
        default: Date.now ,
    },
    user: {
        type: Schema.Types.ObjectId,
        ref: "User"
    }
})

const Exercise = model(MODEL_NAME, exerciseSchema)

module.exports = {
    Exercise
}
