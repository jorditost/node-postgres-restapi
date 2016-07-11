var express = require('express');
var router = express.Router();

var db = require('./queries');

router.get('/api/places', db.getAllPlaces);
router.get('/api/places/:id', db.getPlace);
router.post('/api/places', db.createPlace);
router.put('/api/places/:id', db.updatePlace);
router.delete('/api/places/:id', db.removePlace);

module.exports = router;
