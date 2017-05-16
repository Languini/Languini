// this is going to hold the js for the post creation page
module.exports = {
  listenForSubmission: () => {
    $('#submit-post').on('click', (event) => {
      event.preventDefault()
      var request = $('#request').val().trim()
      var context = $('#context').val().trim()
      var language = $('#languages option:selected').text();
      if (request.length && context.length) {
        var translation = {
          request: request,
          context: context,
          language: language
        }
        $.post('/api/create', translation, (result) => {
          console.log(result)
        })
      } else {
        alert("Please provide a request and context");
      }
    })
  }
}
