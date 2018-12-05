var express = require("express");
var app = express();
var port = 3000;

app.get("/", (req, res) => {
    res.send("Hello World");
});

app.listen(port, () => {
    console.log("Server listening on port " + port);
});

const request = require('request');

request('https://2ncp9is1k8.execute-api.us-east-1.amazonaws.com/dev/feed/game/one', { json: true }, (err, res, body) => {
    if (err) { return console.log(err); }
    console.log(body);
})