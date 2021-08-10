const getFormFields = require('./../../lib/get-form-fields') // get FormFields
const api = require('./api') // access the api
const ui = require('./ui') // access the ui
// const store = require('./../store') // access the store value

const signUp = function (event) {
  event.preventDefault() // prevents webpage from refreshing when button is clicked
  const form = event.target // get information from event and form
  const data = getFormFields(form)

  api.signUp(data) // make an API call
    .then(ui.onSignUpSuccess) // handle success api call
    .catch(ui.onFailure) // handle failure api call
}

const signIn = function (event) {
  event.preventDefault()
  const form = event.target
  const data = getFormFields(form)

  api.signIn(data)
    .then(ui.onSignInSuccess)
    .catch(ui.onFailure)
}

const signOut = function () {
  api.signOut()
    .then(ui.onSignOutSuccess)
    .catch(ui.onFailure)
}

const changePassword = function (event) {
  event.preventDefault()
  const data = getFormFields(this)

  api.changePassword(data)
    .then(ui.changePasswordSuccess)
    .catch(ui.onFailure)
}

const alreadyUser = function () {
  $('.signUp-box').hide()
  $('.signIn-box').show()
  $('#message').text('Glad to see ya again!')
}
const notUser = function () {
  $('.signIn-box').hide()
  $('.signUp-box').show()
  $('#message').text('Lets get ya signed up!')
}
module.exports = {
  signUp,
  signIn,
  signOut,
  changePassword,
  alreadyUser,
  notUser
}
