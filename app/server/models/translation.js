module.exports = (sequelize, DataTypes) => {
  const Translation = sequelize.define('Translation', {
    request: {
      type: DataTypes.STRING,
      allowNull: false
      // validate: {
      //   len: [2, 200]
      // }
    },
    context: {
      type: DataTypes.STRING,
      allowNull: false
      // validate: {
      //   len: [2, 500]
      // }
    },
    language: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        isIn: [[
          'Arabic',
          'Bosnian',
          'Bulgarian',
          'Catalan',
          'Chinese Simplified',
          'Chinese Traditional',
          'Croatian',
          'Czech',
          'Danish',
          'Dutch',
          'English',
          'Estonian',
          'Finnish',
          'French',
          'German',
          'Greek',
          'Haitian Creole',
          'Hebrew',
          'Hindi',
          'Hmong Daw',
          'Hungarian',
          'Indonesian',
          'Italian',
          'Japanese',
          'Kiswahili',
          'Korean',
          'Latvian',
          'Lithuanian',
          'Malay',
          'Maltese',
          'Norwegian',
          'Persian',
          'Polish',
          'Portuguese',
          'Romanian',
          'Russian',
          'Serbian (Cyrillic)',
          'Serbian (Latin)',
          'Slovak',
          'Slovenian',
          'Spanish',
          'Swedish',
          'Thai',
          'Turkish',
          'Ukrainian',
          'Urdu',
          'Vietnamese',
          'Welsh',
          'Yucatec Maya'
        ]]
      }
    }
  },
    {
      classMethods: {
        associate: models => {
          Translation.belongsTo(models.User)
          Translation.hasMany(models.Answer)
        }
      }
    })
  return Translation
}
