const store = require('./../store')
const config = require('./../config')
// const ui = require('./ui')

const logHike = function (data) {
  return $.ajax({
    url: config.apiUrl + '/hike',
    method: 'POST',
    headers: {
      Authorization: 'Bearer ' + store.token
    },
    data: data
  })
}

const viewHike = function () {
  return $.ajax({
    url: config.apiUrl + '/hike',
    method: 'GET',
    headers: {
      Authorization: 'Bearer ' + store.token
    }
  })
}

const deleteHike = function (id) {
  return $.ajax({
    url: config.apiUrl + '/hike/' + id,
    method: 'DELETE',
    headers: {
      Authorization: 'Bearer ' + store.token
    }
  })
}

module.exports = {
  logHike,
  viewHike,
  deleteHike
}
