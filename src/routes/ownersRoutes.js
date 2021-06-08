const express = require('express');
const router = express.Router();

const ownerControllers = require('../controllers/ownersController');
//arba {owners_index}

//get owners        //cia skliausteliu nereikia nes nurodome nuoroda i funkcija, bet jos dar nevykdom
router.get('/', ownerControllers.owners_index);

//get single owner
router.get('/single/:id', ownerControllers.owners_single);

//formos parodymo route
router.get('/new', ownerControllers.owners_form);

//formos apdorojimo route
router.post('/new', ownerControllers.owners_form_post);

// delete form
router.post('/delete/:id', ownerControllers.owner_delete);

//edit form

router.get('/edit/:id', ownerControllers.owner_edit_form);

//edit apdorojimo route
//formos action dalyje nurodytas kelias kur keliauti , turi buti cia toks pat post dalyje, nes siuo adresu nukeliavus , bus atlikti tolimesni veiksmai
router.post('/edit/:id', ownerControllers.owner_edit_post);
router.get('/search', ownerControllers.owner_search);

module.exports = router;
