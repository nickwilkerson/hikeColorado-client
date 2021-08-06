// const store = require('./../store')

const logHikeSuccess = function (response) {
  $('#message').text('Your hike has been logged.')
  console.log('Hike reached this point')
  $('#log-hike').trigger('reset')
}

const onFailure = function () {
  $('#message').text('Houston, we have a problem.')
}

module.exports = {
  logHikeSuccess,
  onFailure
}
