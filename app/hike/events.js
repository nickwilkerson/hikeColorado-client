const { onFailure } = require('../auth/ui')
const getFormFields = require('./../../lib/get-form-fields') // get FormFields
const api = require('./api') // access the api
const ui = require('./ui') // access the ui
const store = require('./../store')

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

  api.viewHike()
    .then(ui.viewHikeSuccess)
    .catch(ui.onFailure)
}

const deleteHike = function (event) {
  event.preventDefault()
  const hike = event.target.id

  api.deleteHike(hike)
    .then(ui.deleteHikeSuccess)
    .catch(ui.onFailure)
}

const editHike = function (event) {
  event.preventDefault()
  const hike = event.target.id
  console.log('clicked', hike)

  api.editHike(hike)
    .then(ui.editHikeSuccess)
    .catch(onFailure)
}

const editHikeForm = function (event) {
  event.preventDefault()
  console.log('button reaching this point', event.target.id)
  console.log('checking the store variable', store.hike)
  const hikeClicked = event.target.id
  const hikes = store.hike

  let editHike = ''
  hikes.forEach((hike) => {
    editHike += `
        <form id="edit-hike">
          <h3>Edit Hike</h3>
          <label>name:</label>
          <input name="hike[name]" type="text" placeholder="Enter Hike Name">
          <label>location:</label>
          <input name="hike[location]" type="text" placeholder="Enter Hike Location">
          <input type="submit" value="Update Hike" $("#edit-hike")>
        </form>
    `
  })
  $('#editHike').html(editHike)
}

module.exports = {
  logHike,
  viewHike,
  deleteHike,
  editHikeForm,
  editHike
}
