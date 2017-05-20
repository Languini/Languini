module.exports = {
  listenForCommentSub: () => {
    $('.submit-comment').on('click', function (event) {
      event.preventDefault()
      const answerId = $(this).attr('data-belongs-to-answer')
      const comment = {
        content: $('#comment-field' + answerId).val().trim(),
        AnswerId: answerId,
        UserId: 3
      }
      if (comment.content.length) {
        $.post('/api/comments', comment, result => {
          location.reload()
        })
      } else {
        $('#comment-field' + answerId).addClass('ba bw1 b--red')
      }
    })
  },

  listenForAnswerSub: () => {
    $('#submit-answer').on('click', (event) => {
      event.preventDefault()
      const answer = {
        content: $('#answer-box').val().trim(),
        TranslationId: $('#translation-request').attr('data-translate-id'),
        UserId: 3
      }
      if (answer.content.length) {
        $.post('/api/answers', answer, result => {
          location.reload()
        })
      } else {
        $('#answer-box').addClass('ba bw1 b--red')
      }
    })
  }
}
