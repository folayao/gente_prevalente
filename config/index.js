require('dotenv').config()

const config = {
    port: process.env.PORT,
    enviroment: process.env.NODE_ENV
}

module.exports = config