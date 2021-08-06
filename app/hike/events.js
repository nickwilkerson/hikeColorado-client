const getFormFields = require('./../../lib/get-form-fields') // get FormFields
const api = require('./api') // access the api
const ui = require('./ui') // access the ui

const logHike = function (event) {
  event.preventDefault() // prevents webpage from refreshing when button is clicked
  const form = event.target // get information from event and form
  const data = getFormFields(form)

  api.logHike(data) // make an API call
    .then(ui.logHikeSuccess) // handle success api call
    .catch(ui.onFailure) // handle failure api call
}

module.exports = {
  logHike
}
