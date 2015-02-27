'use strict'

var extend = require('util')._extend
var resolve = require('resolve')

module.exports = function dConfig(opts) {
  opts = extend({
    convict: require('./convict'),
    schema: extend(require('./schema'), require('./defaults')),
    resolvePath: ['./environments', './initializers'],
    initializers: ['redis', 'mongo', 'livedb', 'store']
  }, opts)

  var config = opts.convict(opts.schema)
  config.loadFile(resolver(opts.resolvePath, config.get('server.env'), '.json'))
  config.validate()
  config.load(opts)

  return extend(opts.initializers.reduce(initialize, config), {get: config.get})
}

function initialize(config, name) {
  var path = resolver(config.get('resolvePath'), name, '.js')
  config[name] = require(path).bind(undefined, config)
  return config
}

function resolver(resolvePath, module, ext) {
  return resolve.sync(module, {
    paths: resolvePath,
    moduleDirectory: resolvePath,
    extensions: [ext]
  })
}
