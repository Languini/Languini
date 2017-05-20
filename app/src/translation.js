module.exports = {
  listenForCommentSub: () => {
    $(".submit-comment").on("click", function (event) {
      event.preventDefault()
      const answerId = $(this).attr("data-belongs-to-answer")
      console.log(answerId)
      const comment = {
        content: $("#comment-field" + answerId).val().trim(),
        AnswerId: answerId,
        UserId: 3
      }
      if (comment.content.length) {
        $.post('/api/comments', comment, result => {
          console.log(result)
          location.reload()
        })
      } else {
        alert('Please submit a valid answer, ya dumb dumb')
      }
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
