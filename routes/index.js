var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res) {
  res.render('index', { title: 'Express' });
});

router.get('/Staff_Registration', function(req, res) {
  res.render('profile/staffRegistration', { title: 'Express' });
});

router.get('/Staff_Login', function(req, res) {
  res.render('profile/staffLogin', { title: 'Express' });
});

router.get('/Student_Registration', function(req, res) {
  res.render('profile/studentRegistration', { title: 'Express' });
});

router.get('/Student_Login', function(req, res) {
  res.render('profile/studentLogin', { title: 'Express' });
});

module.exports = router;
