var express = require("express"),
    port = process.env.port || 3000,
    path = require("path");

var app = express();

app.use(express.static(path.join(__dirname + "/../")));

app.listen(port);

console.log("Running on port: " + port);
