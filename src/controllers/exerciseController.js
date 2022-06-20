const { getUserById } = require("../services/userService")
const exerciseSercice = require("../services/exerciseService")
const serverError = require("../utils/serverError")

const createExercise = async (req, res) => {
    const userId = req.params.userId
    // check userExist
    const user = await getUserById(userId)
    if (user) {
        const { description, duration, date } = req.body
        exerciseSercice.createExercise(userId, { description, duration, date }, res, (err, doc) => {
            if (err) serverError()
            else {
                const { description, duration, date } = doc
                const { username, _id } = user
                res.status(201).json({ description, duration, date: (new Date(date)).toUTCString(), username, _id })
            }
        })
    } else {
        res.status(404).json({ "error": "Not Found" })
    }
}

const getUsersAllExercise = (req, res) => {
    const userId = req.params.userId
    exerciseSercice.getUsersAllExercise(userId,req.query.from,req.query.to,req.query.limit).
        then(doc => {
            // destructuring id needed to get log value
            const { log = [], username, _id } = doc
            res.json({ log, username, count: log.length, _id })
        }).
        catch(err => {
            console.log(err)
            serverError(res)
        })
}

module.exports = {
    createExercise,
    getUsersAllExercise
}
