module.exports = (sequelize, DataTypes) => {
  const Translation = sequelize.define('Translation', {
    request: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        len: [2, 200]
      }
    },
    content: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        len: [2, 500]
      }
    },
    language: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        isIn: [
          'Afrikaans',
          'Albanian',
          'Amharic',
          'Arabic',
          'Armenian',
          'Azerbaijani',
          'Basque',
          'Belarusian',
          'Bengali',
          'Bosnian',
          'Bulgarian',
          'Catalan',
          'Cebuano',
          'Chichewa',
          'Chinese',
          'Corsican',
          'Croatian',
          'Czech',
          'Danish',
          'Dutch',
          'English',
          'Tetun',
          'Esperanto',
          'Estonian',
          'Filipino',
          'Finnish',
          'French',
          'Frisian',
          'Galician',
          'Georgian',
          'German',
          'Greek',
          'Gujarati',
          'Haitian Creole',
          'Hausa',
          'Hawaiian',
          'Hebrew',
          'Hindi',
          'Hmong',
          'Hungarian',
          'Icelandic',
          'Igbo',
          'Indonesian',
          'Irish',
          'Italian',
          'Japanese',
          'Javanese',
          'Kannada',
          'Kazakh',
          'Khmer',
          'Korean',
          'Kurdish',
          'Kyrgyz',
          'Lao',
          'Latin',
          'Latvian',
          'Lithuanian',
          'Luxembourgish',
          'Macedonian',
          'Malagasy',
          'Malay',
          'Malayalam',
          'Maltese',
          'Maori',
          'Marathi',
          'Mongolian',
          'Myanmar',
          'Nepali',
          'Norwegian',
          'Pashto',
          'Persian',
          'Polish',
          'Portuguese',
          'Punjabi',
          'Romanian',
          'Russian',
          'Samoan',
          'Scots Gaelic',
          'Serbian',
          'Sesotho',
          'Shona',
          'Sindhi',
          'Sinhala',
          'Slovak',
          'Slovenian',
          'Somali',
          'Spanish',
          'Sundanese',
          'Swahili',
          'Swedish',
          'Tajik',
          'Tamil',
          'Telugu',
          'Thai',
          'Turkish',
          'Ukrainian',
          'Urdu',
          'Uzbek',
          'Vietnamese',
          'Welsh',
          'Xhosa',
          'Yiddish',
          'Yoruba',
          'Zulu'
        ]
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
