const authEvents = require('./auth/events')
const hikeEvents = require('./hike/events')
// const ui = require('./hike/ui')

$(() => {
  $('#sign-up').on('submit', authEvents.signUp)
  $('#sign-in').on('submit', authEvents.signIn)
  $('#sign-out').on('click', authEvents.signOut)
  $('#change-password').on('submit', authEvents.changePassword)
  $('#log-hike').on('submit', hikeEvents.logHike)
  $('#view-hikes').on('click', hikeEvents.viewHike)
  $('#hikesHtml').on('click', '.delete-hike', hikeEvents.deleteHike)
  $('#hikesHtml').on('click', '.edit-hike', hikeEvents.editHikeForm)
  $('#edit-hike').on('submit', hikeEvents.editHike)
})

$(() => {
  $('#change-password').hide()
  $('#log-hike').hide()
  $('#sign-out').hide()
  $('#view-hikes').hide()
})
