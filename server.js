const bodyParser = require("body-parser");
const cors = require("cors");
const express = require("express");
const http = require("http");
const http = require("https")
const sequelize = require("./models/index.js");
const views = __dirname + '/views/';

const app = express();
const corsOrigin = { origin: "*" };



app.use(express.static(views))
app.use(bodyParser.json());
app.use(cors(corsOrigin));
app.use(bodyParser.urlencoded({ extended: true }));
app.use (function (req, res, next) { // redirect port 80 to 443
  if (req.secure) next();
  else res.redirect('https://' + req.headers.host + req.url);
});

sequelize.sync();

app.get('/', function (req,res) {
  res.sendFile(path + "index.html");
});

require("./routes/document.routes")(app);
require("./routes/project.routes")(app);
require("./routes/user.routes")(app);

var options = {
  ca: fs.readFileSync('chain.pem'),
  cert: fs.readFileSync('cert.pem', 'utf8'),
  key: fs.readFileSync('privkey.pem', 'utf8')
}

setTimeout(function () {server.setSecureContext({
  ca: fs.readFileSync('chain.pem'),
  cert: fs.readFileSync('cert.pem', 'utf8'),
  key: fs.readFileSync('privkey.pem', 'utf8')
})},86400000)

const server = http.createServer(app).listen(80);
const serverSecure = https.createServer(options, app).listen(443);
