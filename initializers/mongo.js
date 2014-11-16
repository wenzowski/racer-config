'use strict'

var livedbMemory = require('livedb').memory
var livedbMongo = require('livedb-mongo')

module.exports = mongoInitializer

function mongoInitializer(config) {
  var url = (
    process.env.MONGO_URL ||
    process.env.MONGOHQ_URL ||
    process.env.MONGOLAB_URL ||
    config.get('mongo.url')
  )
  if (url.indexOf('?auto_reconnect') === -1) url += '?auto_reconnect'
  var opts = {safe: true}

  return config.get('mongo.enabled') ? livedbMongo(url, opts) : livedbMemory()
}
