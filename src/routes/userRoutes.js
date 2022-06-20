const Route = require("express").Router()

const userController = require("../controllers/userController")

// get all users
Route.get("/",userController.getAllUser)

// create user
Route.post("/",userController.createUser)

module.exports = Route
