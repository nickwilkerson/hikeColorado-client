const store = require('./../store')

const onSignUpSuccess = function (response) {
  $('#message').text(`Thanks For Signing Up ${response.user.email}!`)
  $('#sign-up').trigger('reset')
  $('.signUp-box').hide()
  $('.signIn-box').show()
}

const onSignInSuccess = function (response) {
  store.user = response.user
  $('#message').text(`You're signed in, ${response.user.email}!`)
  $('#sign-in').trigger('reset')
  $('#sign-out').show()
  $('#view-hikes').show()
  $('.signUp-box').hide()
  $('.signIn-box').hide()
  $('.topnav').show()
}

const onSignOutSuccess = function () {
  $('#message').text('Signed out.')
  $('#log-hike').hide()
  $('#change-password').hide()
  $('#sign-out').hide()
  $('#view-hikes').hide()
  $('.signIn-box').show()
  $('.signOut-box').show()
  $('#hikesHtml').hide()
  $('.topnav').hide()
  $('#log-hike').trigger('reset')
  $('#changePasswordBox').hide()
  $('#change-password').trigger('reset')
  $('#edit-hike').trigger('reset')
  $('#edit-hike').hide()
  $('#hikeLogger').hide()
  $('#showSingleHike').hide()
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
