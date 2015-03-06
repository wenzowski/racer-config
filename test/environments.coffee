expect = require 'expect.js'

describe 'racer-config', ->
  node_env = (env)->
    before ->
      process.env.NODE_ENV = env
      @config = require('../')()

  context 'development environment', ->
    node_env 'development'

    it 'enables mongo', ->
      expect(@config.get('mongo.enabled')).to.equal(true)

    it 'disables redis', ->
      expect(@config.get('redis.enabled')).to.equal(false)

  context 'test environment', ->
    node_env 'test'

    it 'disables mongo', ->
      expect(@config.get('mongo.enabled')).to.equal(false)

    it 'disables redis', ->
      expect(@config.get('redis.enabled')).to.equal(false)

  context 'staging environment', ->
    node_env 'staging'

    it 'enables mongo', ->
      expect(@config.get('mongo.enabled')).to.equal(true)

    it 'enables redis', ->
      expect(@config.get('redis.enabled')).to.equal(true)

  context 'production environment', ->
    node_env 'production'

    it 'enables mongo', ->
      expect(@config.get('mongo.enabled')).to.equal(true)

    it 'enables redis', ->
      expect(@config.get('redis.enabled')).to.equal(true)
