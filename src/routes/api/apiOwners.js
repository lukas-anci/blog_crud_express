const express = require('express');
const router = express.Router();

const Owner = require('../../models/owner');

//nuejus adresu http://localhost:3000/api/owners/search , gausim json atsakyma   (api/owners nurodyta index.js faile 50 eilutej)

router.post('/search', (req, res) => {
  const searchTerm = req.body.search;
  const searchRegex = new RegExp(searchTerm, 'i'); //randa betkokia vardo dali
  Owner.find({ name: searchRegex })
    .sort({ updatedAt: -1 })
    .then((found) => {
      res.json({
        searchFor: searchTerm,
        found,
      });
    })
    .catch((err) => console.log(err));
});

module.exports = router;
