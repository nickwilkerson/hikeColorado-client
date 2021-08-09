const store = require('./../store')

const logHikeSuccess = function (response) {
  store.hike = response.hike
  $('#message').text('Your hike has been logged.')
  $('#log-hike').trigger('reset')
}

const viewHikeSuccess = function (data) {
  store.view = data.hike
  let hikesHtml = ''

  store.view.forEach(hike => {
    if (store.user._id === hike.owner) {
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
}

const showHikeSuccess = function (data) {
  const showSingleHike = `
    <form id="edit-hike">
      <h3>${data.hike.name}</h3>
      <h5>Edit Hike</h5>
      <label>name:</label>
      <input name="hike[name]" type="text" placeholder="Enter Hike Name">
      <label>location:</label>
      <input name="hike[location]" type="text" placeholder="Enter Hike Location">
      <input type="submit" value="Update Hike">
    </form>
  `
  $('#showSingleHike').html(showSingleHike)
  $('#showSingleHike').show()
  $('#hikesHtml').hide()
}

const editHikeSuccess = function (data) {
  $('#edit-hike').trigger('reset')
  $('#showSingleHike').hide()
  $('#hikesHtml').show()
}

const onFailure = function () {
  $('#message').text('Houston, we have a problem.')
}

module.exports = {
  logHikeSuccess,
  viewHikeSuccess,
  deleteHikeSuccess,
  editHikeSuccess,
  showHikeSuccess,
  onFailure
}
