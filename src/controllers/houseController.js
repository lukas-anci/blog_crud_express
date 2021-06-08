const House = require('../models/house');
const house_new = (req, res) => {
  // res.sendFile(path.join(__dirname, 'pages', 'index.html'));
  const ownersId = req.params.ownersId;
  //atvaizduojame puslapi
  res.render('house/new', {
    title: 'Add New house',
    page: 'house',
    ownersId,
  });
};

const house_new_post = (req, res) => {
  const ownersId = req.params.ownersId;

  //sukurti nauja house ir redurectinti i ownerio page /sukurti paprasta html atvaizdavimui
  // const { houseNo, street, town } = req.body;
  // const newHouse = new House({ houseNo, street, town, ownersId });
  const newHouse = new House({ ...req.body, ownersId });

  newHouse
    .save() //issaugom duomenis , kadangi asinchronine funkcija, reikia then
    .then(() => res.redirect('/owners/single/' + ownersId))
    .catch((err) => console.error(err));
};

module.exports = { house_new, house_new_post };
