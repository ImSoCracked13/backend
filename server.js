const express = require('express')
const app = express()


const mongoose = require('mongoose')
const db = "mongodb+srv://redoofhealer:Redoofhealer@cluster0.ztxu7.mongodb.net/gunSkins"

mongoose.connect(db)
    .then(() => console.log('Connect to Gun Skins Database Success!'))
.catch((err) => console.error('Connect to Gun Skins Database Failed!' + err))


const bodyParser = require('body-parser')
app.use(bodyParser.urlencoded({ extended: true }))
app.use(bodyParser.json())

const cors = require('cors')
app.use(cors())

const gunSkinRouter = require('./api/routes/gunSkinRouter')
gunSkinRouter(app)


const port = 4000
app.listen(port)