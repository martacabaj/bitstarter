var express = require('express');
var buf = new Buffer(200);
buf.write(fs.readFile("index.html", 0), "utf-8");
var app = express.createServer(express.logger());

app.get('/', function(request, response) {
  response.send(buf.toString("uts-8",0,12));
});
var port = process.env.PORT || 5000;
app.listen(port, function() {
  console.log("Listening on " + port);
});
