const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");
const sequelize = require("./models/index.js");

const app = express();

sequelize.sync();

// parse requests of content-type - application/json
app.use(bodyParser.json());

// parse requests of content-type - application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: true }));

// simple route
app.get("/", (req, res) => {
  res.json({ message: "Welcome to xpart server." });
});

require("./routes/document.routes")(app);
require("./routes/project.routes")(app);
require("./routes/user.routes")(app);

// set port, listen for requests
const PORT = 8080;
app.listen(PORT, '0.0.0.0', () => {
  console.log(`Server is running on port ${PORT}.`);
});
