d-config
========

Correctly initializing [DerbyJS] backing services correctly in all environments
is tricky. Use `d-config` to make sure the transitions go smoothly.

```
var dconfig = require('d-config')()
app.use(dconfig.store().modelMiddleware())
```

[DerbyJS]:https://github.com/derbyjs/derby

