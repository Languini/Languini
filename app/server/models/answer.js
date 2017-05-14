'use strict'
module.exports = (sequelize, DataTypes) => {
  const Answer = sequelize.define('Answer', {
    content: {
      type: DataTypes.STRING,
      validate: {
        notNull: true
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
