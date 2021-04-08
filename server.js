const bodyParser = require("body-parser");
const cors = require("cors");
const express = require("express");
const fs = require("fs");
const http = require("http");
const https = require("https")
const sequelize = require("./models/index.js");
const views = __dirname + '/views/';

const app = express();

app.use(cors());
app.use(express.static(__dirname, { dotfiles: 'allow' }));
app.use(express.static(views));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

sequelize.sync();

app.get('/', function (req,res) {
  res.sendFile(path + "index.html");
});

require("./routes/document.routes")(app);
require("./routes/project.routes")(app);
require("./routes/user.routes")(app);

const chain = "/etc/letsencrypt/live/nostromoxpart.com/chain.pem";
const cert = "/etc/letsencrypt/live/nostromoxpart.com/cert.pem";
const privkey = "/etc/letsencrypt/live/nostromoxpart.com/privkey.pem";

var options = {
  ca: fs.readFileSync(chain, 'utf8'),
  cert: fs.readFileSync(cert,  'utf8'),
  key: fs.readFileSync(privkey, 'utf8')
}

setTimeout(function () {serverSecure.setSecureContext({
  ca: fs.readFileSync(chain, 'utf8'),
  cert: fs.readFileSync(cert,  'utf8'),
  key: fs.readFileSync(privkey, 'utf8')
})},86400000)

const serverSecure = https.createServer(options, app).listen(443);
const server = http.createServer(function (req, res) {
    res.writeHead(301, { "Location": "https://" + req.headers['host'] + req.url });
    res.end();
}, app).listen(80);
