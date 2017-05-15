'use strict'
module.exports = (sequelize, DataTypes) => {
  const Answer = sequelize.define('Answer', {
    content: {
      type: DataTypes.STRING,
      validate: {
        len: [2, 500],
        notNull: true
      }
    },
    votes: {
      type: DataTypes.INTEGER,
      validate: {
        notNull: true,
        isInt: true,
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
