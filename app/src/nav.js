module.exports = {
  listenForLog: () => {
    $('#login').on('click', event => {
      window.location.href = '/auth/facebook'
    })
    $('#logout').on('click', event => {
      window.location.href = '/auth/logout'
    })
  }
}
