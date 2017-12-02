const express = require('express')
const router = express.Router()
const db = require('../models')
const helpers = require('../helpers/people')

router.route('/')
  .get(helpers.getPeople)
  .post(helpers.postPeople)

router.route('/:personId')
  .get(helpers.getPerson)
  .put(helpers.putPerson)
  .delete(helpers.deletePerson)

module.exports = router
