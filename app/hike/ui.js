// const store = require('./../store')

const logHikeSuccess = function (response) {
  $('#message').text('Your hike has been logged.')
  console.log('Hike reached this point')
  $('#log-hike').trigger('reset')
}

const viewHikeSuccess = function (data) {
  console.log('view hike path success', data.hike)
}
const onFailure = function () {
  $('#message').text('Houston, we have a problem.')
}

module.exports = {
  logHikeSuccess,
  viewHikeSuccess,
  onFailure
}
