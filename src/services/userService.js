const { User } = require("../models/user")
const validation = require("../utils/validation")

const createUser = (username, res, callback) => {
    const user = new User({ username })
    validation(user, res, () => {
        user.save()
            .then(doc => callback(null, doc))
            .catch(err => callback(err))
    })
}

const getAllUser = () => {
    return new Promise((resolve, reject) => {
        User.find().select("-logs -__v").exec( (err, list) => {
            if (err) {
                reject(err)
            } else resolve(list)
        })
    })
}

const getUser = (username) => {
    return new Promise((resolve, reject) => {
        User.findOne({ username }, (err, doc) => {
            if (err) {
                reject(err)
            } else resolve(doc)
        })
    })
}

const getUserById = async (userId) => {
    return await User.findById(userId).exec()
}

module.exports = {
    createUser,
    getAllUser,
    getUser,
    getUserById
}
