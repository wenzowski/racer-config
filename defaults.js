var crypto = require('crypto')

module.exports = {
  'session': {
    'secret': {
      'default': crypto.randomBytes(64).toString('hex')
    }
  }
}
