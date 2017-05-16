'use strict'
module.exports = (sequelize, DataTypes) => {
  const User = sequelize.define('User', {
    fb_id: {
      type: DataTypes.STRING,
      allowNull: false,
      unique: true
    },
    email: {
      type: DataTypes.STRING,
      allowNull: false,
      unique: true,
      validate: {
        isEmail: true
      }
    },
    name: {
      type: DataTypes.STRING,
      allowNull: false,
      unique: true
    },
    photo: {
      type: DataTypes.STRING,
      allowNull: false,
      unique: true,
      validate: {
        isUrl: true
      }
    }
  }, {
    classMethods: {
      associate: models => {
        User.hasMany(models.Translation)
        User.hasMany(models.Answer)
        User.hasMany(models.Comment)
      }
    }
  })
  return User
}
