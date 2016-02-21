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
