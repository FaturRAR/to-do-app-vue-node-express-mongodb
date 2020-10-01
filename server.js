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
  "origin": "https://vuetodorar.web.app/", 
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

const db = require('./app/model/list.model');
// const todo = require('./app/controller/controller');
app.get('/api',  (req, res) => {
  db.find()
      .then(data => {
          res.json(data)
      })
      .catch(err => {
          res.status(500).send(err)
      })
})

app.get('/', (req,res) => {
    res.send('Hello bruh from server!')
})


app.listen(port, () => {
    console.log(`server running in port ${port}`)
})