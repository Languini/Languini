require('select2')

module.exports = {
  listenForSubmission: () => {
    const languages = [
      { id: 0, text: 'Arabic' },
      { id: 1, text: 'Bosnian' },
      { id: 2, text: 'Bulgarian' },
      { id: 3, text: 'Catalan' },
      { id: 4, text: 'Chinese Simplified' },
      { id: 5, text: 'Chinese Traditional' },
      { id: 6, text: 'Croatian' },
      { id: 7, text: 'Czech' },
      { id: 8, text: 'Danish' },
      { id: 9, text: 'Dutch' },
      { id: 10, text: 'English' },
      { id: 11, text: 'Estonian' },
      { id: 12, text: 'Finnish' },
      { id: 13, text: 'French' },
      { id: 14, text: 'German' },
      { id: 15, text: 'Greek' },
      { id: 16, text: 'Haitian Creole' },
      { id: 17, text: 'Hebrew' },
      { id: 18, text: 'Hindi' },
      { id: 19, text: 'Hmong Daw' },
      { id: 20, text: 'Hungarian' },
      { id: 21, text: 'Indonesian' },
      { id: 22, text: 'Italian' },
      { id: 23, text: 'Japanese' },
      { id: 24, text: 'Kiswahili' },
      { id: 25, text: 'Korean' },
      { id: 26, text: 'Latvian' },
      { id: 27, text: 'Lithuanian' },
      { id: 28, text: 'Malay' },
      { id: 29, text: 'Maltese' },
      { id: 30, text: 'Norwegian' },
      { id: 31, text: 'Persian' },
      { id: 32, text: 'Polish' },
      { id: 33, text: 'Portuguese' },
      { id: 34, text: 'Romanian' },
      { id: 35, text: 'Russian' },
      { id: 36, text: 'Serbian (Cyrillic)' },
      { id: 37, text: 'Serbian (Latin)' },
      { id: 38, text: 'Slovak' },
      { id: 39, text: 'Slovenian' },
      { id: 40, text: 'Spanish' },
      { id: 41, text: 'Swedish' },
      { id: 42, text: 'Thai' },
      { id: 43, text: 'Turkish' },
      { id: 44, text: 'Ukrainian' },
      { id: 45, text: 'Urdu' },
      { id: 46, text: 'Vietnamese' },
      { id: 47, text: 'Welsh' },
      { id: 48, text: 'Yucatec Maya' }
    ]
    $('.language-list').select2({
      placeholder: 'Language',
      data: languages
    })
    $('#submit-post').on('click', (event) => {
      event.preventDefault()
      const translation = {
        request: $('#request').val().trim(),
        context: $('#context').val().trim(),
        language: $('#languages option:selected').text(),
        UserId: 3
      }
      if (translation.request.length && translation.context.length) {
        $.post('/api/translations', translation, result => {
          console.log(result.translation_request);
          window.location.href = "/posts/" + result.translation_request.id;
        })
      } else {
        $('#request').removeClass("ba bw1 b--red")
        $('#context').removeClass("ba bw1 b--red")
        $('#request').removeClass("ba bw1 b--green")
        $('#context').removeClass("ba bw1 b--green")
        if (!translation.request.length && !translation.context.length) {
          $('#request').addClass("ba bw1 b--red")
          $('#context').addClass("ba bw1 b--red")
        } else if (!translation.request.length) {
          $('#request').addClass("ba bw1 b--red")
          $('#context').addClass("ba bw1 b--green")
        } else {
          $('#request').addClass("ba bw1 b--green")
          $('#context').addClass("ba bw1 b--red")
        }
      }
    })
  }
}
