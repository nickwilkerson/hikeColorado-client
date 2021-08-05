const authEvents = require('./auth/events')

$(() => {
  $('#sign-up').on('submit', authEvents.signUp)
  $('#sign-in').on('submit', authEvents.signIn)
  $('#sign-out').on('click', authEvents.signOut)
})
