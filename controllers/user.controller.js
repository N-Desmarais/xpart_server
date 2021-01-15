const sequelize = require("../models/index.js");
const Sequelize = require("sequelize");
const Input = require("../utils/input-utils.js");
const User = sequelize.models.Users;
const Models = sequelize.models;

exports.createUser = async (req, res) => {
  expected = {
    "name": "string",
    "email": "string",
    "pwd_hash": "string",
    "role": 1
  }

  input_check = await Input.complex_check(expected, req.body);
  if(Object.keys(input_check).length != 0) {
    res.status(400).send({
      message: "Invalid Input",
      result: input_check
    });
    return
  }

  const use = {
    "name": "string",
    "email": "string",
    "pwd_hash": "string",
    "role": 1
  }

  User.create(use)
    .then(response => {
      res.send(response);
    })
    .catch(err => {
      res.status(500).send({
        message: err.message || "no error message"
      });
    });
};

exports.findAllUsers = async (req, res) => {
  User.findAll({
    where: {},
    include: Models.User_Roles
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

exports.findOneUser = async (req, res) => {
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

  User.findByPk(id)
    .then(response => {
      res.send(response);
    })
    .catch(err => {
      res.status(500).send({
        message: err.message || "no error message"
      });
    });
};

exports.updateUser = async (req, res) => {
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

  User.update(req.body, {
    where: { user_id: id }
  })
    .then(num => {
      if (num == 1) {
        res.send({
          message: "User updated."
        });
      } else {
        res.send({
          message: `Cannot update User with id=${id}, DNE or invalid body`
        });
      }
    })
    .catch(err => {
      res.status(500).send({
        message: err.message || "no error message"
      });
    });
};

exports.deleteUser = async (req, res) => {
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

  User.destroy({
    where: { user_id: id }
  })
    .then(num => {
      if (num == 1) {
        res.send({
          message: "User was deleted successfully!"
        });
      } else {
        res.send({
          message: `Cannot delete User with id=${id}, DNE?`
        });
      }
    })
    .catch(err => {
      res.status(500).send({
        message: err.message || "no error message"
      });
    });
};

exports.deleteAllUsers = async (req, res) => {
  User.destroy({
    where: {},
    truncate: false
  })
    .then(nums => {
      res.send({ message: `${nums} Users deleted.` });
    })
    .catch(err => {
      res.status(500).send({
        message:
          err.message || "no error message"
      });
    });
};
