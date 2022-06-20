const { Schema, model } = require("mongoose");

const MODEL_NAME = "User"

const userSchema = new Schema({
    username: {
        type: String,
        required: true
    }
}, {
    toJSON: { virtuals: true },
    toObject: { virtuals: true }
})

userSchema.virtual("log", {
    ref: 'Exercise',
    localField: '_id',
    foreignField: 'user',
})

const User = model(MODEL_NAME, userSchema)

module.exports = {
    User
}
