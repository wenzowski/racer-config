racer-config [![Build Status](https://circleci.com/gh/dialoghq/racer-config.svg?style=shield&circle-token=e3237be463d40be0326ca009e780a82e92608cff)](https://circleci.com/gh/dialoghq/racer-config)
============

Correctly initializing [DerbyJS] backing services correctly in all environments
is tricky. Use `racer-config` to make sure the transitions go smoothly.

```javascript
var config = require('racer-config')()
  , store = config.store()
app.use(store.modelMiddleware())
```

[DerbyJS]:https://github.com/derbyjs/derby
