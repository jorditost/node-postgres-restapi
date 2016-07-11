var promise = require('bluebird');

var options = {
  // Initialization Options
  promiseLib: promise
};

var pgp = require('pg-promise')(options);
var connectionString = 'postgres://localhost:5432/locations'; // Locations is an example database name
var db = pgp(connectionString);


// Query Functions
module.exports = {
    getAllPlaces: getAllPlaces,
    getPlace: getPlace
};

function getAllPlaces(req, res, next) {
  db.any('select * from places_table')
    .then(function (data) {
      res.status(200)
        .json({
          status: 'success',
          data: data,
          message: 'Retrieved ALL places'
        });
    })
    .catch(function (err) {
      return next(err);
    });
}

function getPlace(req, res, next) {
  var pupID = parseInt(req.params.id);
  db.one('select * from places_table where gid = $1', pupID)
    .then(function (data) {
      res.status(200)
        .json({
          status: 'success',
          data: data,
          message: 'Retrieved ONE place'
        });
    })
    .catch(function (err) {
      return next(err);
    });
}
