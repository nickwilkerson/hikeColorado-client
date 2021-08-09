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
  console.log('hike ids: ', store.view)
}

const deleteHikeSuccess = function (data) {
  $('#message').text('Hike Deleted.')
  console.log('deleted.')
}

const showHikeSuccess = function (data) {
  console.log('show hike success call')
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
  console.log('edit hike reached the UI success call')
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
