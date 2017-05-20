module.exports = {
  homeListener: () => {
    $('.post').on('click', event => {
      const id = $(event.delegateTarget).attr('data-trans')
      $.get(`/posts/${id}`, result => {
        window.location.href = `/posts/${id}`
      })
    })
  }
}
