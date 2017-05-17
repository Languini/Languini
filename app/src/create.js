require('whatwg-fetch')

module.exports = {
  listenForSubmission: () => {
    $('#submit-post').on('click', (event) => {
      event.preventDefault()
      const translation = {
        request: $('#request').val().trim(),
        context: $('#context').val().trim(),
        language: $('#languages option:selected').text(),
        UserId: 3
      }
      if (translation.request.length && translation.context.length) {
        $.post('/api/create', translation, (result) => {
          console.log(`result: ${result}`)
        })
      } else {
        alert('Please provide a request and context')
      }
    })
  }
}
