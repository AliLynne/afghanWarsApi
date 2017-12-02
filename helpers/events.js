const db = require('../models')

exports.getEvents = function(req, res){
  db.Event.find()
  .then(function(events){
    res.json(events)
  })
  .catch(function(err){
    res.send(err)
  })
}

exports.postEvent = function(req, res) {
  db.Event.create(req.body)
  .then(function(newEvent){
    res.status(201).json(newEvent)
  })
  .catch(function(err){
    res.send(err)
  })
}

exports.getEvent = function(req, res){
  db.Event.findById(req.params.eventId)
  .then(function(event){
    res.json(event)
  })
  .catch(function(err){
    res.send(err)
  })
}

exports.putEvent = function(req, res){
  db.Event.findOneAndUpdate({_id: req.params.eventId}, req.body, {new: true})
  .then(function(event){
    res.json(event)
  })
  .catch(function(err){
    res.send(err)
  })
}

exports.deleteEvent = function(req, res){
  db.Event.remove(req.params.eventId)
  .then(function(event){
    res.send('Event deleted')
  })
  .catch(function(err){
    res.send(err)
  })
}

module.exports = exports
