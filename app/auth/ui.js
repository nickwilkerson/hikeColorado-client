const store = require('./../store')

const onSignUpSuccess = function (response) {
  $('#message').text(`Thanks For Signing Up ${response.user.email}!`)
  $('#sign-up').trigger('reset')
}

const onSignInSuccess = function (response) {
  store.user = response.user
  $('#message').text(`signed in ${response.user.email}!`)
  $('#sign-in').trigger('reset')
  $('#sign-out').show()
  $('#view-hikes').show()
  $('#sign-in').hide()
  $('#sign-up').hide()
  $('.topnav').show()
}

const onSignOutSuccess = function () {
  $('#message').text('Signed out.')
  $('#log-hike').hide()
  $('#change-password').hide()
  $('#sign-out').hide()
  $('#view-hikes').hide()
  $('#sign-in').show()
  $('#sign-up').show()
  $('#hikesHtml').hide()
  $('.topnav').hide()
}

const changePasswordSuccess = function () {
  $('#message').text('Successful password change.')
  $('#change-password').trigger('reset')
}

const onFailure = function () {
  $('#message').text('Houston, we have a problem.')
}

module.exports = {
  onSignUpSuccess,
  onSignInSuccess,
  onSignOutSuccess,
  changePasswordSuccess,
  onFailure
}
