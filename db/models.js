/**
 * Created by USER on 18-Jun-17.
 */
const  Sequelize = require('sequelize');

const db = new Sequelize('manager','eventpass','evendb');

const User = db.define({
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

db.sync({force:false});

module.exports = User;