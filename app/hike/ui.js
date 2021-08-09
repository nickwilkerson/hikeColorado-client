const store = require('./../store')

const logHikeSuccess = function (response) {
  store.hike = response.hike
  $('#message').text('Your hike has been logged.')
  $('#log-hike').trigger('reset')
}

const viewHikeSuccess = function (data) {
  // const hikes = data.hike
  console.log('data is', data)
  store.view = data.hike
  console.log('data.hike is:', store.view)
  let hikesHtml = ''

  store.view.forEach(hike => {
    if (store.user._id === hike.owner) {
      console.log(store.user._id, '=', hike.owner)
      hikesHtml += `
      <h6>Name: ${hike.name}</h6>
      <h6>Location: ${hike.location}</h6>
      <button class='edit-hike' id=${hike._id}>Edit</button>
      <button class='delete-hike' id='${hike._id}'>Delete</button>
  `
    }
  })
  $('#hikesHtml').html(hikesHtml)
}

const deleteHikeSuccess = function (data) {
  $('#message').text('Hike Deleted.')
  console.log('deleted.')
}

const editHikeSuccess = function (data) {
  console.log('edit hike reached the UI success call')
}

const onFailure = function () {
  $('#message').text('Houston, we have a problem.')
}

module.exports = {
  logHikeSuccess,
  viewHikeSuccess,
  deleteHikeSuccess,
  editHikeSuccess,
  onFailure
}
