// EXTERNAL
const express = require('express')
const exphbs = require('express-handlebars')

// INTERNAL
const conn = require('./db/conn')

// MODELS
const Task = require('./models/Task')

// ROUTES
const tasksRoutes = require('./routes/tasksRoutes')

const app = express()

// SETTING
app.engine("handlebars", exphbs.engine())
app.set('view engine', 'handlebars')

// MIDDLEWARE

app.use(
    express.urlencoded({
        extended: true,
    }),
)

app.use(express.json())
app.use(express.static('public'))
app.use('/tasks', tasksRoutes)

conn
    .sync()
    .then(() => {
        app.listen(3000)
    })
    .catch((err) => console.log(err))