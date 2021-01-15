const asyncHandler = require('express-async-handler');

module.exports = app => {
  const users = require("../controllers/user.controller.js");

  var router = require("express").Router();

  router.post("/", asyncHandler(users.createUser));

  router.get("/", asyncHandler(users.findAllUsers));

  router.get("/:id", asyncHandler(users.findOneUser));

  router.put("/:id", asyncHandler(users.updateUser));

  router.delete("/:id", asyncHandler(users.deleteUser));

  router.delete("/", asyncHandler(users.deleteAllUsers));

  app.use('/api/users', router);
}
