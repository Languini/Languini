// this is going to hold the js for the post creation page
module.exports = {
  listenForSubmission: () => {
    $('#submit-post').on('click', (event) => {
      event.preventDefault()
      var request = $('#request').val().trim()
      var context = $('#context').val().trim()
      var lang = $('#languages').attr('selectedIndex');
      console.log(lang);
      console.log("Button was clicked");
      if (request.length && context.length) {
        var translation = {
          request: request,
          context: context
        }
        $.post('/api/create', translation, () => {
          console.log('Submitted a new post')
        })
      } else {
        alert("Please provide a request and context");
      }
    })
  }
}
