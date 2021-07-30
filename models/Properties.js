const { Model, DataTypes } = require('sequelize');
const sequelize = require('../config/connection');

class Properties extends Model { }

Properties.init(
    {
        sequelize,
        freezeTableName: true,
        underscored: true,
        modelName: 'properties'
    }
);

module.exports = Properties;