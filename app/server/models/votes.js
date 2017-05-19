module.exports = (sequelize, DataTypes) => {
  const Votes = sequelize.define('Votes', {
    upvote: {
      type: DataTypes.BOOLEAN,
      default: false,
    },
    downvote: {
      type: DataTypes.BOOLEAN,
      default: false,
    }
  }, {
    classMethods: {
      associate: models => {
        Votes.belongsTo(models.Answer)
        Votes.belongsTo(models.User)
      }
    }
  })
  return Votes
}
