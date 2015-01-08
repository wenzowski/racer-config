'use strict'

var redis
try {
  redis = require('redis-url')
} catch (e) {
  redis = false
}

module.exports = redisInitializer

function redisInitializer(config) {
  if (redis === false) config.set('redis.enabled', false)

  var url = (
    process.env.REDIS_URL ||
    process.env.REDISTOGO_URL ||
    process.env.REDISCLOUD_URL ||
    config.get('redis.url')
  )

  return config.get('redis.enabled') ? redis.connect(url) : false
}
