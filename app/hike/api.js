const store = require('./../store')
const config = require('./../config')
// const ui = require('./ui')

const logHike = function (data) {
  return $.ajax({
    url: config.apiUrl + '/hike',
    method: 'POST',
    headers: {
      Authorization: 'Bearer ' + store.user.token
    },
    data: data
  })
}

const viewHike = function () {
  return $.ajax({
    url: config.apiUrl + '/hike',
    method: 'GET',
    headers: {
      Authorization: 'Bearer ' + store.user.token
    }
  })
}

const deleteHike = function (id) {
  return $.ajax({
    url: config.apiUrl + '/hike/' + id,
    method: 'DELETE',
    headers: {
      Authorization: 'Bearer ' + store.user.token
    }
  })
}

const showHike = function (id) {
  return $.ajax({
    url: config.apiUrl + '/hike/' + id,
    method: 'GET',
    headers: {
      Authorization: 'Bearer ' + store.user.token
    },
    data: id
  })
}

const editHike = function (form, id) {
  return $.ajax({
    url: config.apiUrl + '/hike/' + id,
    method: 'PATCH',
    headers: {
      Authorization: 'Bearer ' + store.user.token
    },
    data: form
  })
}

module.exports = {
  logHike,
  viewHike,
  deleteHike,
  showHike,
  editHike
}
