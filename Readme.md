racer-config [![Build Status](https://travis-ci.org/wenzowski/racer-config.svg?branch=master)](https://travis-ci.org/wenzowski/racer-config)
============

Correctly initializing [DerbyJS] backing services correctly in all environments
is tricky. Use `racer-config` to make sure the transitions go smoothly.

```javascript
var config = require('racer-config')()
  , store = config.store()
app.use(store.modelMiddleware())
```

[DerbyJS]:https://github.com/derbyjs/derby

