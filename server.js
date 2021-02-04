const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");
const sequelize = require("./models/index.js");
const views = __dirname + '/views/';

const app = express();

var corsOrigin = {
  origin: "*"
};



app.use(express.static(views))
app.use(bodyParser.json());
app.use(cors(corsOrigin));
app.use(bodyParser.urlencoded({ extended: true }));

sequelize.sync();

app.get('/', function (req,res) {
  res.sendFile(path + "index.html");
});

require("./routes/document.routes")(app);
require("./routes/project.routes")(app);
require("./routes/user.routes")(app);

const PORT = 8080;
app.listen(PORT, '0.0.0.0', () => {
  console.log(`Server is running on port ${PORT}.`);
});
