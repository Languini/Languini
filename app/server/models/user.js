'use strict'
module.exports = (sequelize, DataTypes) => {
  const User = sequelize.define('User', {
    fb_id: {
      type: DataTypes.STRING,
      validate: {
        notNull: true,
        unique: true
      }
    },
    email: {
      type: DataTypes.STRING,
      validate: {
        isEmail: true,
        unique: true
      }
    }
  }, {
    classMethods: {
      associate: models => {
        User.hasMany(models.posts)
      }
    }
  })
  return User
}
