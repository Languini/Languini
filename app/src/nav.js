module.exports = {
  navListener: () => {
    $('#home').on('click', event => {
      window.location.href = '/'
    })
    $('#login').on('click', event => {
      window.location.href = '/auth/facebook'
    })
    $('#logout').on('click', event => {
      window.location.href = '/auth/logout'
    })
  }
}
