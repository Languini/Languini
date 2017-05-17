// this is going to hold the js for the post creation page
module.exports = {
  listenForSubmission: () => {
    $('#submit-post').on('click', (event) => {
      event.preventDefault()
      const translation = {
        request: $('#request').val().trim(),
        context: $('#context').val().trim()
      }
      $.post('/api/create', translation, () => {
        console.log('Submitted a new post')
      })
    })
  }
}
