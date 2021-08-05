const store = require('./../store')

const onSignUpSuccess = function (response) {
  $('#message').text(`Thanks For Signing Up ${response.user.email}!`)
  $('#sign-up').trigger('reset')
}

const onSignInSuccess = function (response) {
  store.token = response.user.token
  console.log('You have successfully signed in, and here is your token:', store.token)
  $('#message').text(`You're officially signed in ${response.user.email}!`)
  $('#sign-in').trigger('reset')
}

const onSignOutSuccess = function () {
  $('#message').text('Signed out ghostrider.')
}

const onFailure = function () {
  $('#message').text('Houston, we have a problem.')
}

module.exports = {
  onSignUpSuccess,
  onSignInSuccess,
  onSignOutSuccess,
  onFailure
}
