const express = require('express');
const app = express();
const connect_DB = require('./config/db')

const port = process.env.PORT || 3000

//dotenv
require('dotenv').config({
    path: './config/config.env'
})

//mongo_connect 
connect_DB()

app.get('/', (req, res) => {
    res.send('Hello , this is test-services')
})


app.listen(port, () => {
    console.log(`server is runing on port ${port}`)
})

