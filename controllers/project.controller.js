const sequelize = require("../models/index.js");
const Sequelize = require("sequelize");
const Input = require("../utils/input-utils.js");
const Project = sequelize.models.Projects;
const Models = sequelize.models;

exports.createProject = async (req, res) => {
  expected = {
    "name": "string",
    "code": "string",
    "owner": 1
  }

  input_check = await Input.complex_check(expected, req.body);
  if(Object.keys(input_check).length != 0) {
    res.status(400).send({
      message: "Invalid Input",
      result: input_check
    });
    return
  }

  const proj = {
    "name": req.body.name,
    "code": req.body.code,
    "owner": req.body.owner
  }

  Project.create(proj)
    .then(response => {
      res.send(response);
    })
    .catch(err => {
      res.status(500).send({
        message: err.message || "no error message"
      });
    });
};

exports.findAllProjects = async (req, res) => {
  Project.findAll({
    where: {},
    include: {model: Models.Users}
  })
    .then(response => {
      res.send(response);
    })
    .catch(err => {
      res.status(500).send({
        message: err.message || "no error message"
      });
    });
};

exports.findOneProject = async (req, res) => {
  expected = { id: 1 }

  input_check = await Input.simple_check(expected, req.params);
  if(Object.keys(input_check).length != 0) {
    res.status(400).send({
      message: "Invalid Input",
      result: input_check
    });
    return
  }

  const id = req.params.id;

  Project.findByPk(id)
    .then(response => {
      res.send(response);
    })
    .catch(err => {
      res.status(500).send({
        message: err.message || "no error message"
      });
    });
};

exports.updateProject = async (req, res) => {
  expected = { id: 1 }

  input_check = await Input.simple_check(expected, req.params);
  if(Object.keys(input_check).length != 0) {
    res.status(400).send({
      message: "Invalid Input",
      result: input_check
    });
    return
  }

  const id = req.params.id;

  Project.update(req.body, {
    where: { project_id: id }
  })
    .then(num => {
      if (num == 1) {
        res.send({
          message: "Project updated."
        });
      } else {
        res.send({
          message: `Cannot update Project with id=${id}, DNE or invalid body`
        });
      }
    })
    .catch(err => {
      res.status(500).send({
        message: err.message || "no error message"
      });
    });
};

exports.deleteProject = async (req, res) => {
  expected = { id: 1 }

  input_check = await Input.simple_check(expected, req.params);
  if(Object.keys(input_check).length != 0) {
    res.status(400).send({
      message: "Invalid Input",
      result: input_check
    });
    return
  }

  const id = req.params.id;

  Project.destroy({
    where: { project_id: id }
  })
    .then(num => {
      if (num == 1) {
        res.send({
          message: "Project was deleted successfully!"
        });
      } else {
        res.send({
          message: `Cannot delete Project with id=${id}, DNE?`
        });
      }
    })
    .catch(err => {
      res.status(500).send({
        message: err.message || "no error message"
      });
    });
};

exports.deleteAllProjects = async (req, res) => {
  Project.destroy({
    where: {},
    truncate: false
  })
    .then(nums => {
      res.send({ message: `${nums} Projects deleted.` });
    })
    .catch(err => {
      res.status(500).send({
        message:
          err.message || "no error message"
      });
    });
};
