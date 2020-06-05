require('dotenv').config()
const express = require('express')
const massive = require('massive')

const {SERVER_PORT, CONNECTION_STRING} = process.env
const  ctrl = require('./controller')

const app = express()

app.use(express.json())

app.post('/auth/login', ctrl.login)
app.post('/auth/register', ctrl.register)
app.get('/auth/posts/')

massive({
    connectionString: CONNECTION_STRING,
    ssl: {rejectUnauthorized: false}
}).then(db => {
    app.set('db', db)
    console.log('Connected to db')
    app.listen (SERVER_PORT, () => console.log(`Connected to port ${SERVER_PORT}`))
}).catch(err => console.log(err))