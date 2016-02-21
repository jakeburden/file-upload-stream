### file-upload-stream

[![js-standard-style](https://cdn.rawgit.com/feross/standard/master/badge.svg)](https://github.com/feross/standard)

Takes a file and streams it to a http server.

```js
var http = require('http')
var fs = require('fs')

module.exports = function (file, opts) {
  var req = http.request(opts)
  req.on('error', function (err) {
    console.log(err)
  })

  fs.stat(file, function (err, stat) {
    if (err) console.error(err)
    opts.headers['Content-Length'] = stat.size
    fs.createReadStream(file).pipe(req)
  })
}
```
