// EXTERNAL
const express = require('express')
const exphbs = require('express-handlebars')

// INTERNAL
const conn = require('./db/conn')

// MODELS
const Task = require('./models/Task')

const app = express()

app.engine("handlebars", exphbs.engine())
app.set('view engine', 'handlebars')

app.use(
    express.urlencoded({
        extended: true,
    }),
)

app.use(express.json())
app.use(express.static('public'))

conn
    .sync()
    .then(() => {
        app.listen(3000)
    })
    .catch((err) => console.log(err))