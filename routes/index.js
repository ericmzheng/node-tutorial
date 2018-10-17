var express = require('express');
var router = express.Router();
var axios = require('axios');

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

router.get('/fotc', function(req, res, next) {
  axios.get('https://www.reddit.com/r/dota2.json')
  .then(function (response) {
    console.log(response.data.data.children);
    res.render('fotc', { title: 'dota', data: response.data });
  })
  .catch(function (error) {
    console.log(error);
  });
});

module.exports = router;
