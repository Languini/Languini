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
    },
    name: {
      type: DataTypes.STRING,
      validate: {
        notNull: true,
        unique: true
      }
    },
    photo: {
      type: DataTypes.STRING,
      validate: {
        isUrl: true,
        notNull: true,
        unique: true
      }
    }
  }, {
    classMethods: {
      associate: models => {
        User.hasMany(models.Translation)
        User.hasMany(models.Answer)
        User.hasMany(models.Comment)
        User.hasMany(models.Votes)
      }
    }
  })
  return User
}
