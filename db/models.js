/**
 * Created by USER on 18-Jun-17.
 */
const  Sequelize = require('sequelize');
const config =  require('../config/config');
const db = new Sequelize({
    username: config.username,
    password: config.password,
    database: 'eventdb',
    host: 'localhost',
    dialect: 'mysql',
    pool: {
        max: 5,
        min: 0,
        idle: 10000
    }
});

const User = db.define('user',{
    id:{
        type:Sequelize.INTEGER,
        primaryKey:true,
        autoIncrement:true
    },
    username:{
        type: Sequelize.INTEGER
    },
    email:Sequelize.STRING,
    password:Sequelize.STRING
});

db.sync({force:true});

module.exports = User;