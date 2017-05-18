require('whatwg-fetch')

module.exports = {
  listenForSubmission: () => {
    event.preventDefault()
    $('#submit-post').on('click', (event) => {
      const translation = {
        request: $('#request').val().trim(),
        context: $('#context').val().trim(),
        language: $('#languages option:selected').text(),
        UserId: 3
      }
      if (translation.request.length && translation.context.length) {
        $.post('/api/translations', translation, result => {
        })
      } else {
        alert('Please provide a request and context')
      }
    })
  }
}
