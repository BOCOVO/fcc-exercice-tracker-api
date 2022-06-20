const express = require('express')
const app = express()
const cors = require('cors')
require('dotenv').config()
const mongoose = require("mongoose")
const bodyParser = require("body-parser")
const multer  = require('multer')

const userRoutes =  require("./src/routes/userRoutes")
const exerciceRoutes =  require("./src/routes/exerciseRoutes")


// connect to the database
mongoose.connect(process.env.DB,{},()=>{
  console.log("Connected to DB");
})

// body parse middlewares]
// for multipart handling
const upload = multer()

app.use(bodyParser.json())
app.use(bodyParser.urlencoded({extended:true}))
app.use(upload.none()
)

app.use(cors())
app.use(express.static('public'))
app.get('/', (req, res) => {
  res.sendFile(__dirname + '/views/index.html')
});

// exercise routes
app.use("/api/users",exerciceRoutes)

// users routes
app.use("/api/users",userRoutes)




const listener = app.listen(process.env.PORT || 3000, () => {
  console.log('Your app is listening on port ' + listener.address().port)
})
