var express = require('express');
var buf = new Buffer(27);
buf.write(fs.readFile("index.html", 0), "utf-8");
var app = express.createServer(express.logger());

app.get('/', function(request, response) {
  response.send(buf.toString("uts-8",0,27));
});
var port = process.env.PORT || 5000;
app.listen(port, function() {
  console.log("Listening on " + port);
});
