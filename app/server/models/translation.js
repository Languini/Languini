'use strict'
module.exports = (sequelize, DataTypes) => {
    const Translation = sequelize.define('Translation', {
        request: {
            type: DataTypes.STRING,
            validate: {
                notNull: true
            }
        },
        content: {
            type: DataTypes.STRING
        }
    }, {
        classMethods: {
            associate: models => {
                Translation.belongsTo(models.User)
                Translation.hasMany(models.Answer)
            }
        }
    })
    return Translation
}