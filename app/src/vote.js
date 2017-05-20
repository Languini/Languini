module.exports = {
  voteListener: () => {
    if (Object.keys($('#logout')).length > 0) {
      $('.thumbs').on('click', event => {
        const data = {
          AnswerId: $(event.target).closest('.answer').data('id')
        }
        $(event.target).attr('id') === 'thumbs-up'
          ? (
            data.upvote = true,
            data.downvote = false
          )
          : (
            data.upvote = false,
            data.downvote = true
          )
        $.post('/vote', data, result => {
          location.reload()
        })
      })
    }
  }
}
