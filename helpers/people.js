const db = require('../models')

exports.getPeople = function(req, res){
  db.Person.find()
  .then(function(people){
    res.json(people)
  })
  .catch(function(err){
    res.send(err)
  })
}

exports.postPeople = function(req, res){
  db.Person.create(req.body)
  .then(function(newPerson){
    res.status(201).json(newPerson)
  })
  .catch(function(err){
    res.send(err)
  })
}

exports.getPerson = function(req, res) {
  db.Person.findById(req.params.personId)
  .then(function(foundPerson){
    res.json(foundPerson)
  })
  .catch(function(err){
    res.send(err)
  })
}

exports.putPerson = function(req, res) {
  db.Person.findOneAndUpdate({_id: req.params.personId}, req.body, {new:true})
  .then(function(person){
    res.json(person)
  })
  .catch(function(err){
    res.send(err)
  })
}

exports.deletePerson = function(req, res) {
  db.Person.remove({_id: req.params.personId})
  .then(function(person){
    res.send('Deleted!')
  })
  .catch(function(err){
    res.send(err)
  })
}

module.exports = exports
