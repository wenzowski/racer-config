'use strict'

var logger = {write: require('debug')('racer-config:oplog')}
var lib
try {
  lib = require('derby')
} catch (e) {
  lib = require('racer')
}

module.exports = function storeInitializer(config) {
  return lib.createStore({backend: config.livedb(), logger: logger})
}
