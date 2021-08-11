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
      <div class="display-box">
        <p class="display">Name: ${hike.name}<br></p>
        <p class="display">Location: ${hike.location}<br></p>
        <p class="display">Distance: ${hike.distance}</p>
        <p class="display">Difficulty: ${hike.difficulty}</p>
        <p class="display">Notes: ${hike.notes}</p>
        <button class='edit-hike' id=${hike._id}>Edit</button>
        <button class='delete-hike' id='${hike._id}'>Delete</button>
      </div>
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
          <div id="showSingleHike">
        <form id= "edit-hike">
          <h3>Edit Hike</h3>
          <div class="user-box">
            <label>Name:</label>
            <input name="hike[name]" type="text" placeholder="Enter Hike Name">
          </div>
          <div class="user-box">
            <label>Location:</label>
            <input name="hike[location]" type="text" placeholder="Enter Hike Location">
          </div>
          <div class="user-box">
            <label>Distance:</label>
            <input name="hike[distance]" type="text" placeholder="Enter Hike Distance">
          </div>
          <div class="user-box">
            <label for="difficulty">Difficulty:</label>
            <select id="difficulty" name="hike[difficulty]" type="text">
              <option value="easy">Easy</option>
              <option value="moderate">Moderate</option>
              <option value="difficult">Difficult</option>
              <option value="strenuous">Strenuous</option>
            </select>
          </div>
          <div class="user-box">
            <label>Notes:</label>
            <input name="hike[notes]" type="text" placeholder="Optional Notes">
          </div>
          <input type="submit" value="Update Hike" id="update-hike-button">
        </form>
        </div>
  `
  $('#showSingleHike').html(showSingleHike)
  $('#showSingleHike').show()
  $('#hikesHtml').hide()
}

const editHikeSuccess = function (data) {
  $('#message').text('Hike updated.')
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
