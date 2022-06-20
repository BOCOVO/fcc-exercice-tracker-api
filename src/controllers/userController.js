const userService = require("../services/userService")
const serverError = require("../utils/serverError")

const createUser = async (req, res) => {
    const { username } = req.body
    // check if user already exists
    try {
        const user = await userService.getUser(username)
        if (user) {
            res.json(user)
        } else {
            userService.createUser(username, res, (err, user) => {
                if (err) new Error()
                else {
                    res.status(201).json(user)
                }
            })
        }
    } catch (error) {
        console.log(error)
        serverError(res)
    }

}

const getAllUser = (_, res) => {
    userService.getAllUser()
        .then(docs => {
            res.json(docs)
        })
        .catch((err) => {
            console.log(err)
            serverError(res)
        })
}

module.exports = {
    createUser,
    getAllUser,
}