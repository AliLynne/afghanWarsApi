const express = require('express')
const router = express.Router()
const db = require('../models')
const helpers = require('../helpers/groups')

router.route('/')
  .get(helpers.getGroups)
  .post(helpers.postGroup)

router.route('/:groupId')
  .get(helpers.getGroup)
  .put(helpers.putGroup)
  .delete(helpers.deleteGroup)

module.exports = router
