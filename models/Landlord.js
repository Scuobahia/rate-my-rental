const bcrypt = require('bcrypt');
const { Model, DataTypes } = require('sequelize');
const sequelize = require('../config/connection');

// create our Landlord model
class Landlord extends Model {
   checkPassword(loginPw) {
      return bcrypt.compareSync(loginPw, this.password);
   }
}

Landlord.init(
<<<<<<< HEAD
  {
    id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
      autoIncrement: true
    },
    first_name: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    last_name: {
      type: DataTypes.STRING,
      allowNull: false
    },
    company_name: {
      type: DataTypes.STRING,
      allowNull: true,
    },
    number_of_properties: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
    contact_info: {
      type: DataTypes.STRING,
      allowNull: false
    },
    username: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    email: {
      type: DataTypes.STRING,
      allowNull: false,
      unique: true,
      validate: {
        isEmail: true,
      },
    },
    password: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        len: [4]
      }
    }
  },
  {
    hooks: {
      async beforeCreate(newLandlordData) {
        newLandlordData.password = await bcrypt.hash(newLandlordData.password, 10);
        return newLandlordData;
=======
   {
      id: {
         type: DataTypes.INTEGER,
         allowNull: false,
         primaryKey: true,
         autoIncrement: true
      },
      username: {
         type: DataTypes.STRING,
         allowNull: false
>>>>>>> b82b772ce2b7853325c269b1748278f27eb018c4
      },
      email: {
         type: DataTypes.STRING,
         allowNull: false,
         unique: true,
         validate: {
            isEmail: true
         }
      },
      password: {
         type: DataTypes.STRING,
         allowNull: false,
         validate: {
            len: [4]
         }
      }
   },
   {
      hooks: {
         async beforeCreate(newLandlordData) {
            newLandlordData.password = await bcrypt.hash(newLandlordData.password, 10);
            return newLandlordData;
         },
         async beforeUpdate(updatedLandlordData) {
            updatedLandlordData.password = await bcrypt.hash(updatedLandlordData.password, 10);
            return updatedLandlordData;
         }
      },

      sequelize,
      timestamps: false,
      freezeTableName: true,
      underscored: true,
      modelName: 'landlord'
   }
);

module.exports = Landlord;