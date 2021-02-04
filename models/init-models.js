var DataTypes = require("sequelize").DataTypes;
var _Document_Classes = require("./Document_Classes");
var _Documents = require("./Documents");
var _Projects = require("./Projects");
var _User_Projects = require("./User_Projects");
var _User_Roles = require("./User_Roles");
var _Users = require("./Users");

function initModels(sequelize) {
  var Document_Classes = _Document_Classes(sequelize, DataTypes);
  var Documents = _Documents(sequelize, DataTypes);
  var Projects = _Projects(sequelize, DataTypes);
  var User_Projects = _User_Projects(sequelize, DataTypes);
  var User_Roles = _User_Roles(sequelize, DataTypes);
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
  User_Projects.belongsTo(Users, { as: "Project", foreignKey: "user"});
  Projects.belongsToMany(Users, { through: User_Projects, foreignKey: "project", otherKey: "user" });
  Users.hasMany(User_Projects, { foreignKey: "user"});
  User_Projects.belongsTo(Projects, { as: "User", foreignKey: "project"});
  Projects.hasMany(User_Projects, { foreignKey: "project"});
  Users.belongsTo(User_Roles, { foreignKey: "role"});
  User_Roles.hasMany(Users, { foreignKey: "role"});

  return {
    Document_Classes,
    Documents,
    Projects,
    User_Projects,
    User_Roles,
    Users,
  };
}
module.exports = initModels;
module.exports.initModels = initModels;
module.exports.default = initModels;
