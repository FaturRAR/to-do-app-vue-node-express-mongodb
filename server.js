const express = require('express'),
bodyParser = require('body-parser'),
cors = require('cors'),
port = process.env.PORT || 8080

const app = express();

// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: false }))
 
// parse application/json
app.use(bodyParser.json())

// const whitelist = ['https://todoapprarr.web.app', 'https://null.jsbin.com', 'https://front-end-vue-3a743.web.app', 'http://127.0.0.1:5500']
// const corsOptions = {
//   origin: function (origin, callback) {
//     if (whitelist.indexOf(origin) !== -1 || !origin) {
//       callback(null, true)
//     } else {
//       callback(new Error('Not allowed by CORS'))
//     }
//   }
// }

const config = {
  "origin": "https://front-end-vue-3a743.web.app/",
  "methods": "GET,HEAD,PUT,PATCH,POST,DELETE",
  "preflightContinue": false,
  "optionsSuccessStatus": 204
}

app.use(cors(config))
// app.use(cors(corsOptions))

// Connect to db
const connect = require('./app/db/connect')
connect()

const router = require('./app/router/router')
app.use('/api', router)

const todo = require('./app/controller/controller');
app.get('/api', todo.findAll)

app.get('/', (req,res) => {
    res.send('Hello bruh from server!')
})

app.listen(port, () => {
    console.log(`server running in port ${port}`)
})