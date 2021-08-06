const authEvents = require('./auth/events')
const hikeEvents = require('./hike/events')

$(() => {
  $('#sign-up').on('submit', authEvents.signUp)
  $('#sign-in').on('submit', authEvents.signIn)
  $('#sign-out').on('click', authEvents.signOut)
  $('#change-password').on('submit', authEvents.changePassword)
  $('#log-hike').on('submit', hikeEvents.logHike)
})
