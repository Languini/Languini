'use strict'
module.exports = (sequelize, DataTypes) => {
  const Comment = sequelize.define('Comment', {
    content: {
      type: DataTypes.STRING,
      allowNull: false,
      unique: true,
      validate: {
        len: [2, 500]
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
