const fetch = require('node-fetch')
const withQuery = require('with-query')

const { Translation, Answer } = require('../models')

function languageCode(language) {
  return [
    {
      "languageCode": "ar",
      "languageName": "Arabic"
    },
    {
      "languageCode": "bs",
      "languageName": "Bosnian"
    },
    {
      "languageCode": "bg",
      "languageName": "Bulgarian"
    },
    {
      "languageCode": "ca",
      "languageName": "Catalan"
    },
    {
      "languageCode": "zh-CHS",
      "languageName": "Chinese Simplified"
    },
    {
      "languageCode": "zh-CHT",
      "languageName": "Chinese Traditional"
    },
    {
      "languageCode": "hr",
      "languageName": "Croatian"
    },
    {
      "languageCode": "cs",
      "languageName": "Czech"
    },
    {
      "languageCode": "da",
      "languageName": "Danish"
    },
    {
      "languageCode": "nl",
      "languageName": "Dutch"
    },
    {
      "languageCode": "en",
      "languageName": "English"
    },
    {
      "languageCode": "et",
      "languageName": "Estonian"
    },
    {
      "languageCode": "fi",
      "languageName": "Finnish"
    },
    {
      "languageCode": "fr",
      "languageName": "French"
    },
    {
      "languageCode": "de",
      "languageName": "German"
    },
    {
      "languageCode": "el",
      "languageName": "Greek"
    },
    {
      "languageCode": "ht",
      "languageName": "Haitian Creole"
    },
    {
      "languageCode": "he",
      "languageName": "Hebrew"
    },
    {
      "languageCode": "hi",
      "languageName": "Hindi"
    },
    {
      "languageCode": "mww",
      "languageName": "Hmong Daw"
    },
    {
      "languageCode": "hu",
      "languageName": "Hungarian"
    },
    {
      "languageCode": "id",
      "languageName": "Indonesian"
    },
    {
      "languageCode": "it",
      "languageName": "Italian"
    },
    {
      "languageCode": "ja",
      "languageName": "Japanese"
    },
    {
      "languageCode": "sw",
      "languageName": "Kiswahili"
    },
    {
      "languageCode": "ko",
      "languageName": "Korean"
    },
    {
      "languageCode": "lv",
      "languageName": "Latvian"
    },
    {
      "languageCode": "lt",
      "languageName": "Lithuanian"
    },
    {
      "languageCode": "ms",
      "languageName": "Malay"
    },
    {
      "languageCode": "mt",
      "languageName": "Maltese"
    },
    {
      "languageCode": "no",
      "languageName": "Norwegian"
    },
    {
      "languageCode": "fa",
      "languageName": "Persian"
    },
    {
      "languageCode": "pl",
      "languageName": "Polish"
    },
    {
      "languageCode": "pt",
      "languageName": "Portuguese"
    },
    {
      "languageCode": "ro",
      "languageName": "Romanian"
    },
    {
      "languageCode": "ru",
      "languageName": "Russian"
    },
    {
      "languageCode": "sr-Cyrl",
      "languageName": "Serbian (Cyrillic)"
    },
    {
      "languageCode": "sr-Latn",
      "languageName": "Serbian (Latin)"
    },
    {
      "languageCode": "sk",
      "languageName": "Slovak"
    },
    {
      "languageCode": "sl",
      "languageName": "Slovenian"
    },
    {
      "languageCode": "es",
      "languageName": "Spanish"
    },
    {
      "languageCode": "sv",
      "languageName": "Swedish"
    },
    {
      "languageCode": "th",
      "languageName": "Thai"
    },
    {
      "languageCode": "tr",
      "languageName": "Turkish"
    },
    {
      "languageCode": "uk",
      "languageName": "Ukrainian"
    },
    {
      "languageCode": "ur",
      "languageName": "Urdu"
    },
    {
      "languageCode": "vi",
      "languageName": "Vietnamese"
    },
    {
      "languageCode": "cy",
      "languageName": "Welsh"
    },
    {
      "languageCode": "yua",
      "languageName": "Yucatec Maya"
    }
  ].filter(pair => pair.languageName === language)[0].languageCode
}

exports.someFunction = (req, res) => {}

exports.createPost = async (req, res) => {
  const resource = await Translation.create(req.body)
  const transRaw = await fetch(withQuery(
    'http://www.transltr.org/api/translate',
    {
      text: resource.request,
      to: languageCode(resource.language),
      from: 'en'
    }
  ))
  const trans = (await transRaw.json()).translationText
  await Answer.create({
    content: trans,
    votes: 0,
    TranslationId: resource.id,
    UserId: 1,
  })
  res.redirect('/create')
}
