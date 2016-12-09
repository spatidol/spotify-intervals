'use strict';
var Sequelize = require('sequelize')
var db = require('APP/db')

const User = db.define('users', {
  username: Sequelize.STRING,
  email: {
    type: Sequelize.STRING,
    validate: {
      isEmail: true
    }
  },
  password: Sequelize.STRING,
  googleId: Sequelize.STRING,
  accessToken: Sequelize.TEXT,
  refreshToken: Sequelize.STRING
})


module.exports = User;
