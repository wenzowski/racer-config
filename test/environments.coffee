expect = require 'expect.js'

describe 'racer-config', ->
  node_env = (env)->
    before ->
      process.env.NODE_ENV = env
      @config = require('../')()
      @store = @config.store()

  it_syncs = =>
    it 'syncs a subscribed document', (done)->
      primary_model = @store.createModel()
      secondary_model = @store.createModel()
      id = primary_model.add 'collection',
        foo: 'bar'
      primary_model.close ->
        scope = 'collection.' + id
        expect(secondary_model.scope(scope).get('foo')).to.equal(undefined)
        secondary_model.subscribe scope, ->
          expect(secondary_model.scope(scope).get('foo')).to.equal('bar')
          secondary_model.close(done)
    it 'syncs a fetched document', (done)->
      primary_model = @store.createModel()
      secondary_model = @store.createModel()
      id = primary_model.add 'collection',
        foo: 'bar'
      primary_model.close ->
        scope = 'collection.' + id
        expect(secondary_model.scope(scope).get('foo')).to.equal(undefined)
        secondary_model.fetch scope, ->
          expect(secondary_model.scope(scope).get('foo')).to.equal('bar')
          secondary_model.close(done)

  context 'development environment', ->
    node_env 'development'

    it 'enables mongo', ->
      expect(@config.get('mongo.enabled')).to.equal(true)

    it 'disables redis', ->
      expect(@config.get('redis.enabled')).to.equal(false)

    it_syncs()

  context 'test environment', ->
    node_env 'test'

    it 'disables mongo', ->
      expect(@config.get('mongo.enabled')).to.equal(false)

    it 'disables redis', ->
      expect(@config.get('redis.enabled')).to.equal(false)

    it_syncs()

  context 'staging environment', ->
    node_env 'staging'

    it 'enables mongo', ->
      expect(@config.get('mongo.enabled')).to.equal(true)

    it 'enables redis', ->
      expect(@config.get('redis.enabled')).to.equal(true)

    it_syncs()

  context 'production environment', ->
    node_env 'production'

    it 'enables mongo', ->
      expect(@config.get('mongo.enabled')).to.equal(true)

    it 'enables redis', ->
      expect(@config.get('redis.enabled')).to.equal(true)

    it_syncs()
