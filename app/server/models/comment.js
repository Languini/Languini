'use strict'
module.exports = (sequelize, DataTypes) => {
  const Comment = sequelize.define('Comment', {
    content: {
      type: DataTypes.STRING,
      validate: {
        len: [2, 500],
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
