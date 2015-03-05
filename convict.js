'use strict'

var convict = require('convict')
var validator = require('convict/node_modules/validator')

module.exports = convict

convict.addFormat('mongoUrl', isMongoUrl)
convict.addFormat('redisUrl', isRedisUrl)
convict.addFormat('secretKey', isSecret)

/* eslint-disable camelcase */
function isMongoUrl(str) {
  return validator.isURL(str, {protocols: ['mongodb'], require_protocol: true})
}
function isRedisUrl(str) {
  return validator.isURL(str, {protocols: ['redis'], require_protocol: true})
}
/* eslint-enable camelcase */
function isSecret(str) {
  return validator.isHexadecimal(str) && validator.isLength(str, 128)
}
