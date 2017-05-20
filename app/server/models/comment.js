module.exports = (sequelize, DataTypes) => {
  const Comment = sequelize.define('Comment', {
    content: {
      type: DataTypes.STRING,
      allowNull: false
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
