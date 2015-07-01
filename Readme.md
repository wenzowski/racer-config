racer-config [![Build Status](https://circleci.com/gh/wenzowski/racer-config/tree/master.svg?style=svg)](https://circleci.com/gh/wenzowski/racer-config/tree/master)
============

Correctly initializing [DerbyJS] backing services correctly in all environments
is tricky. Use `racer-config` to make sure the transitions go smoothly.

```javascript
var config = require('racer-config')()
  , store = config.store()
app.use(store.modelMiddleware())
```

[DerbyJS]:https://github.com/derbyjs/derby
