const asyncHandler = require('express-async-handler');

module.exports = app => {
  const projects = require("../controllers/project.controller.js");

  var router = require("express").Router();

  router.post("/", asyncHandler(projects.createProject));

  router.get("/", asyncHandler(projects.findAllProjects));

  router.get("/:id", asyncHandler(projects.findOneProject));

  router.put("/:id", asyncHandler(projects.updateProject));

  router.delete("/:id", asyncHandler(projects.deleteProject));

  router.delete("/", asyncHandler(projects.deleteAllProjects));

  app.use('/api/projects', router);
}
