var express = require('express');
var router = express.Router();

var db = require('./queries');


router.get('/api/places', db.getAllPlaces);
router.get('/api/places/:id', db.getPlace);


module.exports = router;
