var connect = require('connect');
connect.createServer(
  connect.staticProvider(__dirname + "/public")
).listen(3000);

livereload = require('livereload');
server = livereload.createServer({exts: ['less']});
server.watch(__dirname + "/public");
