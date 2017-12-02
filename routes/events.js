const express = require('express')
const router = express.Router()
const db = require('../models')
const helpers = require('../helpers/events')

router.route('/')
  .get(helpers.getEvents)
  .post(helpers.postEvent)

router.route('/:eventId')
  .get(helpers.getEvent)
  .put(helpers.putEvent)
  .delete(helpers.deleteEvent)

module.exports = router
