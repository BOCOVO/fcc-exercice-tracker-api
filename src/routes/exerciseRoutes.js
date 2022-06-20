const Route = require("express").Router()

const exerciseController = require("../controllers/exerciseController")

// create exercice
Route.post("/:userId/exercises",exerciseController.createExercise)

// get all exercice
Route.get("/:userId/logs",exerciseController.getUsersAllExercise)

module.exports = Route
