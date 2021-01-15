/* jshint indent: 2 */

const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('Documents', {
    doc_id: {
      autoIncrement: true,
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    project: {
      type: DataTypes.INTEGER,
      allowNull: true,
      references: {
        model: 'Projects',
        key: 'project_id'
      }
    },
    class: {
      type: DataTypes.INTEGER,
      allowNull: true,
      references: {
        model: 'Document_Classes',
        key: 'class_id'
      }
    },
    part_num: {
      type: DataTypes.STRING(255),
      allowNull: false
    },
    revision: {
      type: DataTypes.STRING(255),
      allowNull: true
    },
    description: {
      type: DataTypes.STRING(255),
      allowNull: true
    },
    requestor: {
      type: DataTypes.INTEGER,
      allowNull: true,
      references: {
        model: 'Users',
        key: 'user_id'
      }
    },
    checker: {
      type: DataTypes.INTEGER,
      allowNull: true,
      references: {
        model: 'Users',
        key: 'user_id'
      }
    },
    approver: {
      type: DataTypes.INTEGER,
      allowNull: true,
      references: {
        model: 'Users',
        key: 'user_id'
      }
    },
    creation_date: {
      type: DataTypes.DATEONLY,
      allowNull: true
    },
    ready_date: {
      type: DataTypes.DATEONLY,
      allowNull: true
    },
    checked_date: {
      type: DataTypes.DATEONLY,
      allowNull: true
    },
    approved_date: {
      type: DataTypes.DATEONLY,
      allowNull: true
    },
    released_date: {
      type: DataTypes.DATEONLY,
      allowNull: true
    },
    revision_reason: {
      type: DataTypes.STRING(255),
      allowNull: true
    }
  }, {
    sequelize,
    tableName: 'Documents',
    timestamps: false,
    indexes: [
      {
        name: "PRIMARY",
        unique: true,
        using: "BTREE",
        fields: [
          { name: "doc_id" },
        ]
      },
      {
        name: "project",
        using: "BTREE",
        fields: [
          { name: "project" },
        ]
      },
      {
        name: "class",
        using: "BTREE",
        fields: [
          { name: "class" },
        ]
      },
      {
        name: "requestor",
        using: "BTREE",
        fields: [
          { name: "requestor" },
        ]
      },
      {
        name: "checker",
        using: "BTREE",
        fields: [
          { name: "checker" },
        ]
      },
      {
        name: "approver",
        using: "BTREE",
        fields: [
          { name: "approver" },
        ]
      },
    ]
  });
};
