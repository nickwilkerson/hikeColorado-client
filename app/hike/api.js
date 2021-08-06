const store = require('./../store')
const config = require('./../config')

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

module.exports = {
  logHike
}
