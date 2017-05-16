'use strict'
module.exports = (sequelize, DataTypes) => {
  const Answer = sequelize.define('Answer', {
    content: {
      type: DataTypes.STRING,
      allowNull: false,
      unique: true,
      validate: {
        len: [2, 500]
      }
    },
    votes: {
      type: DataTypes.INTEGER,
      allowNull: false,
      unique: true,
      validate: {
        isInt: true
      }
    }
  }, {
    classMethods: {
      associate: models => {
        Answer.belongsTo(models.Translation)
        Answer.belongsTo(models.User)
        Answer.hasMany(models.Comment)
      }
    }
  })
  return Answer
}
