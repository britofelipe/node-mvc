const { Sequelize } = require('sequelize')

const sequelize = new Sequelize('nodemvc', 'root', '', {
    host: 'localhost',
    dialect: 'mysql',
})

try {
    sequelize.authenticate()
    console.log('Connected successfully')
} catch(error) {
    console.log(`Connection not possible: ${error}`)
}

module.exports = sequelize