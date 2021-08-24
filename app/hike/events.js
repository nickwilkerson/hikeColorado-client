const getFormFields = require('./../../lib/get-form-fields') // get FormFields
const api = require('./api') // access the api
const ui = require('./ui') // access the ui
// const store = require('./../store')

const logHike = function (event) {
  event.preventDefault() // prevents webpage from refreshing when button is clicked
  const form = event.target // get information from event and form
  const data = getFormFields(form)

  api.logHike(data) // make an API call
    .then(ui.logHikeSuccess) // handle success api call
    .catch(ui.onFailure) // handle failure api call
}

const viewHike = function (event) {
  event.preventDefault()
  $('#hikesHtml').show()

  api.viewHike()
    .then(ui.viewHikeSuccess)
    .catch(ui.onFailure)
}

const deleteHike = function (event) {
  event.preventDefault()
  console.log('event ', event.target.id)
  api.deleteHike(event.target.id)
    .then(ui.deleteHikeSuccess)
    .catch(ui.onFailure)
}

const showHike = function (event) {
  event.preventDefault()

  const hike = event.target.id
  console.log('event.target: ', hike)
  console.log('clicked')
  api.showHike(hike)
    .then(ui.showHikeSuccess)
    .catch(ui.onFailure)
}

const editHike = function (event) {
  event.preventDefault()
  const form = getFormFields(event.target)
  const id = event.target.id
  api.editHike(form, id)
    .then(ui.editHikeSuccess)
    .catch(ui.onFailure)
}

// const editHikeForm = function () {
//   const editForm = `
//   <form>
//     <label>Notes: </label>
//     <input name="hike[notes]" type="text" placeholder="Notes">
//   </form>
//   `
// }

const changeView = function (event) {
  if ($(this).hasClass('changePassword')) {
    $('#changePasswordBox').show()
    $('#change-password').show()
    $('#log-hike').hide()
    $('#hikeLogger').hide()
    $('#hikesHtml').hide()
    $('#showSingleHike').hide()
  } else if ($(this).hasClass('hikeLogger')) {
    $('#hikeLogger').show()
    $('#log-hike').show()
    $('#changePasswordBox').hide()
    $('#hikesHtml').hide()
    $('#showSingleHike').hide()
  } else if ($(this).hasClass('active')) {
    $('#log-hike').hide()
    $('#hikeLogger').hide()
    $('#changePasswordBox').hide()
    $('#hikesHtml').hide()
    $('#showSingleHike').hide()
    $('#message').text('')
  } else if ($(this).hasClass('viewHikes')) {
    $('#hikesHtml').show()
    $('#log-hike').hide()
    $('#hikeLogger').hide()
    $('#changePasswordBox').hide()
    $('#showSingleHike').hide()
  }
}

module.exports = {
  logHike,
  viewHike,
  deleteHike,
  showHike,
  editHike,
  changeView
}
