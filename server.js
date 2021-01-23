const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");
const sequelize = require("./models/index.js");

const app = express();

var corsOrigin = {
  origin: "http://localhost:8081"
};


app.use(bodyParser.json());
app.use(cors(corsOrigin));
app.use(bodyParser.urlencoded({ extended: true }));

sequelize.sync();

app.get("/", (req, res) => {
  res.json({ message: "Welcome to xpart server." });
});

require("./routes/document.routes")(app);
require("./routes/project.routes")(app);
require("./routes/user.routes")(app);

const PORT = 8080;
app.listen(PORT, '0.0.0.0', () => {
  console.log(`Server is running on port ${PORT}.`);
});
