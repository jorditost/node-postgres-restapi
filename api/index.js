var express = require('express');
var router = express.Router();


// http://localhost:3000/
router.get('/', function(req, res, next) {
    res.status(200)
      .json({
        status: 'success',
        message: 'Live long and prosper!'
      });
});


//////////////////////
// Postgres queries
//////////////////////

var db = require('./queries');

router.get('/api/starships', db.getAllStarships);
router.get('/api/starships/:id', db.getStarship);
router.post('/api/starships', db.createStarship);
router.put('/api/starships/:id', db.updateStarship);
router.delete('/api/starships/:id', db.removeStarship);

module.exports = router;
