const express = require('express')
const app = express()
const port = process.env.PORT || 3030
const bodyParser = require('body-parser')

app.use(bodyParser.json())
app.use(bodyParser.urlencoded({extended: true}))
app.use(express.static(__dirname + '/views'))
app.use(express.static(__dirname + '/public'))

const peopleRoutes = require('./routes/people')
const groupRoutes = require('./routes/groups')
const eventRoutes = require('./routes/events')

app.get('/', function(req, res) {
  res.sendFile('index.html')
})

app.use('/api/people', peopleRoutes)
app.use('/api/groups', groupRoutes)
app.use('/api/events', eventRoutes)

app.listen(port, function(){
  console.log('App is listening on ' + port)
})
