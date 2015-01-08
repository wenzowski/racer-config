racer-config
============

Correctly initializing [DerbyJS] backing services correctly in all environments
is tricky. Use `racer-config` to make sure the transitions go smoothly.

```
var config = require('racer-config')()
app.use(config.store().modelMiddleware())
```

[DerbyJS]:https://github.com/derbyjs/derby

