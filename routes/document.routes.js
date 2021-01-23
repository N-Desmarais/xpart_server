const asyncHandler = require('express-async-handler');

module.exports = app => {
  const documents = require("../controllers/document.controller.js");

  var router = require("express").Router();

  router.get("/maxpartnum", asyncHandler(documents.getMaxPart));

  router.post("/", asyncHandler(documents.createDoc));

  router.get("/", asyncHandler(documents.findAllDocs));

  router.get("/:id", asyncHandler(documents.findOneDoc));

  router.get("/project/:project", asyncHandler(documents.findAllDocsByProject));

  router.put("/:id", asyncHandler(documents.updateDoc));

  router.delete("/:id", asyncHandler(documents.deleteDoc));

  router.delete("/", asyncHandler(documents.deleteAllDocs));

  app.use('/api/documents', router);
}
