'use strict'

var lib
try {
  lib = require('derby')
} catch (e) {
  lib = require('racer')
}

module.exports = function storeInitializer(config) {
  return lib.createStore({backend: config.livedb()})
}
