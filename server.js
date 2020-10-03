const express = require('express'),
bodyParser = require('body-parser'),
cors = require('cors'),
port = process.env.PORT || 8080

const app = express();

// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: false }))
 
// parse application/json
app.use(bodyParser.json())

const config = {
  "origin": "http://localhost:8081", 
  "methods": "GET,HEAD,PUT,PATCH,POST,DELETE",
  "preflightContinue": false,
  "optionsSuccessStatus": 200
}

app.use(cors(config))
// app.use(cors(corsOptions))

// Connect to db
const connect = require('./app/db/connect')
connect()

const router = require('./app/router/router')
app.use('/api/', router)

app.get('/', (req,res) => {
    res.send('Hello bruh from server!')
})


app.listen(port, () => {
    console.log(`server running in port ${port}`)
})