const db = require('../models')

exports.getGroups = function(req, res){
  db.Group.find()
  .then(function(groups){
    res.json(groups)
  })
  .catch(function(err){
    res.send(err)
  })
}

exports.postGroup = function(req, res){
  db.Group.create(req.body)
  .then(function(group){
    res.status(201).json(group)
  })
  .catch(function(err){
    res.send(err)
  })
}

exports.getGroup = function(req, res){
  db.Group.findById(req.params.groupId)
  .then(function(group){
    res.json(group)
  })
  .catch(function(err){
    res.send(err)
  })
}

exports.putGroup = function(req, res){
  db.Group.findOneAndUpdate({_id: req.params.groupId}, req.body, {new: true})
  .then(function(group){
    res.json(group)
  })
  .catch(function(err){
    res.send(err)
  })
}

exports.deleteGroup = function(req, res){
  db.Group.remove(req.params.groupId)
  .then(function(group){
    res.send('Deleted group')
  })
  .catch(function(err){
    res.send(err)
  })
}

module.exports = exports
