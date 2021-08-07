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

  api.viewHike()
    .then(ui.viewHikeSuccess)
    .catch(ui.onFailure)
}

const deleteHike = function (event) {
  console.log('CLICK')
  event.preventDefault()
  const hike = event.target.id

  console.log('store id', hike)

  api.deleteHike(hike)
    .then(ui.deleteHikeSuccess)
    .catch(ui.onFailure)
}

module.exports = {
  logHike,
  viewHike,
  deleteHike
}
