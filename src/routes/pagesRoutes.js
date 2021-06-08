const express = require('express');
const router = express.Router();

//homepage
router.get('/', function (req, res) {
  // res.sendFile(path.join(__dirname, 'pages', 'index.html'));

  //atvaizduojame puslapi
  res.render('index', {
    title: 'Home',
    page: 'home',
  });
});

//about page
router.get('/about', function (req, res) {
  // res.sendFile(path.join(__dirname, 'pages', 'about.html'));
  res.render('about', {
    title: 'About Us',
    page: 'about',
  });
});

router.get('/contact', function (req, res) {
  // res.sendFile(path.join(__dirname, 'pages', 'contact.html'));
  res.render('contact', {
    title: 'Contact Us',
    page: 'contact',
  });
});

module.exports = router;
