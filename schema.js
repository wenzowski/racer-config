'use strict'

var crypto = require('crypto')

module.exports = {
  "server": {
    "port": {
      "doc": "The port this app shoud listen on.",
      "default": 3000,
      "format": "port",
      "env": "PORT"
    },
    "env": {
      "doc": "The application environment",
      "format": [
        "development",
        "production",
        "staging",
        "test"
      ],
      "default": "development",
      "env": "NODE_ENV"
    }
  },
  "mongo": {
    "enabled": {
      "doc": "When livedb-mongo is disabled the volatile livedb.memory driver will be used instead.",
      "default": true,
      "env": "MONGO_ENABLED"
    },
    "url": {
      "doc": "mongodb://[username:password@]host1[:port1][,host2[:port2],...[,hostN[:portN]]][/[database][?options]]",
      "format": "mongoUrl",
      "default": "mongodb://localhost:27017/default",
      "env": "MONGO_URL"
    }
  },
  "redis": {
    "enabled": {
      "doc": "livedb-mongo does not require redis when there is only one server",
      "default": false,
      "env": "REDIS_ENABLED"
    },
    "url": {
      "doc": "redis://[db-number[:password]@]host:port[?option=value]",
      "format": "redisUrl",
      "default": "redis://1:@localhost:6379?no_ready_check=true",
      "env": "REDIS_URL"
    }
  },
  "session": {
    "secret": {
      "doc": "The secret used to sign the session cookie. Unless overridden, sessions will be invalidated on every server restart",
      "default": crypto.randomBytes(64).toString('hex'),
      "format": "secretKey",
      "env": "SESSION_SECRET"
    }
  }
}

