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
  api.deleteHike(event.target.id)
    .then(ui.deleteHikeSuccess)
    .catch(ui.onFailure)
}

const showHike = function (event) {
  event.preventDefault()

  const hike = event.target.id
  api.showHike(hike)
    .then(ui.showHikeSuccess)
    .catch(ui.onFailure)
}

const updateHike = function (event) {
  event.preventDefault()
  const form = getFormFields(event.target)
  const id = event.target.id
  console.log('and', id)
  api.editHike(form, id)
    .then(ui.editHikeSuccess)
    .catch(ui.onFailure)
}

const editHikeForm = function (event) {
  $('#edit-hike-form').show()
  $('#showSingleHike').hide()
  let editForm = ''

  editForm += `
  <form id=${event.target.id}>
            <h3>Edit Hike</h3>
            <div class="user-box">
              <label>Name:</label>
              <input name="hike[name]" type="text" placeholder="Enter Hike Name">
            </div>
            <div class="user-box">
              <label>Location:</label>
              <input name="hike[location]" type="text" placeholder="Enter Hike Location">
            </div>
            <div class="user-box">
              <label>Distance:</label>
              <input name="hike[distance]" type="text" placeholder="Enter Hike Distance">
            </div>
            <div class="user-box">
              <label for="difficulty">Difficulty:</label>
              <select class="difficulty" name="hike[difficulty]" type="text">
                <option value="Easy">Easy</option>
                <option value="Moderate">Moderate</option>
                <option value="Difficult">Difficult</option>
                <option value="Strenuous">Strenuous</option>
              </select>
            </div>
            <div class="user-box">
              <label>Notes:</label>
              <input name="hike[notes]" type="text" placeholder="Optional Notes">
            </div>
            <input type="submit" id=${event.target.id} value="Update">
          </form>
          `
  $('#edit-hike-form').html(editForm)
}

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
  updateHike,
  editHikeForm,
  changeView
}
