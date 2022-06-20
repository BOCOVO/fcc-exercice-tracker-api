const { Exercise } = require("../models/exercise")
const createPopulateOptions = require("../utils/createPopulationOptions")
const validation = require("../utils/validation")
const { User } = require("../models/user")

const createExercise = (user, { description, duration, date }, res, callback) => {
    const exercise = new Exercise({ description, duration, user, date })
    validation(exercise, res, () => {
        exercise.save()
            .then(doc => callback(null, doc))
            .catch(err => callback(err))
    })
}

const getUsersAllExercise = (userId, from, to, limit) => {
    return new Promise((resolve, reject) => {
        const query = User.findById(userId)
        const populateOptions = createPopulateOptions(from, to, limit)
        query.populate(populateOptions).exec((err, data) => {
            if (err) reject(err)
            else {
                resolve(data)
            }
        })
    })
}

module.exports = {
    createExercise,
    getUsersAllExercise
}