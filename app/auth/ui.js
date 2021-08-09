const store = require('./../store')

const onSignUpSuccess = function (response) {
  $('#message').text(`Thanks For Signing Up ${response.user.email}!`)
  $('#sign-up').trigger('reset')
}

const onSignInSuccess = function (response) {
  store.user = response.user
  $('#message').text(`signed in ${response.user.email}!`)
  $('#sign-in').trigger('reset')
  $('#log-hike').show()
  $('#change-password').show()
  $('#sign-out').show()
  $('#view-hikes').show()
  $('#sign-in').hide()
  $('#sign-up').hide()
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
