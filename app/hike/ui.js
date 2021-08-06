// const store = require('./../store')

const logHikeSuccess = function (response) {
  $('#message').text('Your hike has been logged.')
  console.log('Hike reached this point')
  $('#log-hike').trigger('reset')
}

const viewHikeSuccess = function (data) {
  const hikes = data.hike
  let hikesHtml = ''
  hikes.forEach(hike => {
    hikesHtml += `
      <h6>Name: ${hike.name}</h6>
      <h6>Location: ${hike.location}</h6>
    `
  })
  $('#hikesHtml').html(hikesHtml)
}

const onFailure = function () {
  $('#message').text('Houston, we have a problem.')
}

module.exports = {
  logHikeSuccess,
  viewHikeSuccess,
  onFailure
}
