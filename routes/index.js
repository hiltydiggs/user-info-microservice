var express = require("express"),
    port = process.env.port || 3000,
    ip = process.env.ip || "127.0.0.1",
    path = require("path"),
    getInfo = require("./getInfo");

var app = express();

app.use(express.static(path.join(__dirname + "/../")));
app.use("/get-info", getInfo);

app.listen(port, ip);

console.log("Running on port: " + port);
