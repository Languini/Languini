'use strict'
module.exports = (sequelize, DataTypes) => {
  const Comment = sequelize.define('Comment', {
    content: {
      type: DataTypes.STRING,
      validate: {
        notNull: true
      }
    }
  }, {
    classMethods: {
      associate: models => {
        Comment.belongsTo(models.Answer)
        Comment.belongsTo(models.User)
      }
    }
  })
  return Comment
}
