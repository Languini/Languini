module.exports = {
  listenForCommentSub: () => {
    $("#submit-comment").on("click", (event) => {
      event.preventDefault()
      console.log("This works.")
    })
  },

  listenForAnswerSub: () => {
    $("#submit-answer").on("click", (event) => {
      event.preventDefault()
      const answer = {
        content: $("#answer-box").val().trim(),
        TranslationId: $("#translation-request").attr("data-translate-id"),
        UserId: 3
      }
      if (answer.content.length) {
        $.post('/api/answers', answer, result => {
          console.log(result)
          location.reload()
        })
      } else {
        alert('Please submit a valid answer, ya dumb dumb')
      }
    })
  }
}
