const store = require('./../store')

// default card image
const defaultImg = 'https://static.bhphotovideo.com/explora/sites/default/files/styles/top_shot/public/New-Hiking.jpg?itok=p0tfoXXi'
const cardImg = 'https://img.themanual.com/image/themanual/peter-pryharski-111529-unsplash-800x800.jpg'

const logHikeSuccess = function (response) {
  store.hike = response.hike
  $('#message').text('Your hike has been logged.')
  $('#log-hike').trigger('reset')
  $('#message').addClass('success')
  setTimeout(() => {
    $('#message').html('')
    $('#message').removeClass('success')
  }, 5000)
}

const viewHikeSuccess = function (data) {
  store.hikes = data.hike
  let hikesHtml = ''

  // loop through all hikes
  // verify that hike owner matches hike id
  store.hikes.forEach(hike => {
    if (store.user._id === hike.owner) {
      store.hikeId = hike._id
      hikesHtml += `
      <div class="card" style="width: 18rem;">
      <img class="card-img-top" src="${defaultImg}" alt="Card image cap">
      <div class="card-body">
        <h3 class="card-title">${hike.name}</h3>
        <p>${hike.location}</p>
        <p>${hike.distance}</p>
        <button class="view-hike" id=${hike._id}>View Hike</button>
        </div>
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
  const hike = data.hike
  let showSingleHike = ''
  showSingleHike += `
      <div class="card" style="width: 40rem;">
        <img class="card-img-top" src="${cardImg}" alt="Card image cap">
        <div class="card-body">
          <h5 class="card-title">${hike.name}</h5>
          <p class="card-text">${hike.notes}</p>
        </div>
        <ul class="list-group list-group-flush">
          <li class="list-group-item">Location: ${hike.location}</li>
          <li class="list-group-item">Distance: ${hike.distance}</li>
          <li class="list-group-item">Difficulty: ${hike.difficulty}</li>
        </ul>
        <div class="card-body">
          <button class="edit-hike" id=${hike._id}>Edit</button>
          <button class="delete-hike" id=${hike._id}>Delete</button>
        </div>
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
  $('#edit-hike-form').hide()
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
