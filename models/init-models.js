var DataTypes = require("sequelize").DataTypes;
var _Document_Classes = require("./Document_Classes");
var _Documents = require("./Documents");
var _Projects = require("./Projects");
var _User_roles = require("./User_roles");
var _Users = require("./Users");

function initModels(sequelize) {
  var Document_Classes = _Document_Classes(sequelize, DataTypes);
  var Documents = _Documents(sequelize, DataTypes);
  var Projects = _Projects(sequelize, DataTypes);
  var User_roles = _User_roles(sequelize, DataTypes);
  var Users = _Users(sequelize, DataTypes);

  Documents.belongsTo(Projects, { foreignKey: "project"});
  Projects.hasMany(Documents, { foreignKey: "project"});
  Documents.belongsTo(Document_Classes, { foreignKey: "class"});
  Document_Classes.hasMany(Documents, { foreignKey: "class"});
  Documents.belongsTo(Users, { as: "Requestor", foreignKey: "requestor"});
  Users.hasMany(Documents, { foreignKey: "requestor"});
  Documents.belongsTo(Users, { as: "Checker", foreignKey: "checker"});
  Users.hasMany(Documents, { foreignKey: "checker"});
  Documents.belongsTo(Users, { as: "Approver", foreignKey: "approver"});
  Users.hasMany(Documents, { foreignKey: "approver"});
  Projects.belongsTo(Users, { foreignKey: "owner"});
  Users.hasMany(Projects, { foreignKey: "owner"});
  Users.belongsTo(User_roles, { foreignKey: "role"});
  User_roles.hasMany(Users, { foreignKey: "role"});

  return {
    Document_Classes,
    Documents,
    Projects,
    User_roles,
    Users,
  };
}
module.exports = initModels;
module.exports.initModels = initModels;
module.exports.default = initModels;
