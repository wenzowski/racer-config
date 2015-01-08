'use strict'

var livedb = require('livedb')

module.exports = livedbInitializer

function livedbInitializer(config) {
  var mongodb = config.mongo()
  var redisActive = config.redis()
  var redisObserver = config.redis()

  var driver
  if (redisActive)
    driver = livedb.redisDriver(mongodb, redisActive, redisObserver)
  else
    driver = livedb.inprocessDriver(mongodb)

  return livedb.client({
    snapshotDb: mongodb,
    oplog: mongodb,
    drive: driver
  })
}
