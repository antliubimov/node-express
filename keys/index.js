require('dotenv').config()

module.exports = {
    MONGODB_URI: process.env.DB_CONN,
    SESSION_SECRET: 'some secret value',
    SENDGRID_API_KEY: process.env.GRID_API_KEY,
    EMAIL_FROM: 'ant.liubimov@gmail.com',
    BASE_URL: 'http://localhost:3000'
}