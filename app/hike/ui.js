const store = require('./../store')

const logHikeSuccess = function (response) {
  store.hike = response.hike._id
  $('#message').text('Your hike has been logged.')
  console.log('Hike reached this point', store.hike)
  $('#log-hike').trigger('reset')
}

const viewHikeSuccess = function (data) {
  const hikes = data.hike
  let hikesHtml = ''
  hikes.forEach(hike => {
    hikesHtml += `
      <h6>Name: ${hike.name}</h6>
      <h6>Location: ${hike.location}</h6>
      <button id='edit-hike' data-id=${hike._id}>Edit</button>
      <button class='delete-hike' id='${hike._id}'>Delete</button>
  `
  })
  $('#hikesHtml').html(hikesHtml)
}

const deleteHikeSuccess = function (data) {
  $('#message').text('Hike Deleted.')
  console.log('deleted.')
}

const onFailure = function () {
  $('#message').text('Houston, we have a problem.')
}

module.exports = {
  logHikeSuccess,
  viewHikeSuccess,
  deleteHikeSuccess,
  onFailure
}
