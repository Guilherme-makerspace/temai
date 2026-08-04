const {DataTypes, Model} = require('sequelize')
const sequelize = require('../database/dbconfig')

class User extends Model {}

User.init({
    username:{
        type: DataTypes.STRING,
        allowNull: false,
    },
    email:{
        type: DataTypes.STRING,
        unique: true,
        validate: {isEmail:true},
    },
    password:{
        type: DataTypes.STRING,
        allowNull: false,
    }
    },{
        sequelize,
        modelName: 'Users',
        tableName: 'users', 
    });

module.exports = User;