const express = require('express');
const app = express();

const { mongoDbString } = require('./config/config');

const path = require('path');

const PORT = 3000;

const pagesRoutes = require('./routes/pagesRoutes');
const ownersRoutes = require('./routes/ownersRoutes');
const apiRoutes = require('./routes/api/apiRoutes');
const apiOwnersRoutes = require('./routes/api/apiOwners');
const blogRoutes = require('./routes/blogRoutes');
const houseRoutes = require('./routes/houseRoutes');
const commentRoutes = require('./routes/commentRoutes');
//susiinstaliuojam mongoose , npm install mongoose
//isitraukiam mongoose paketa
const mongoose = require('mongoose');
//prisijungiam prie duomenu bazes

mongoose
  .connect(mongoDbString, { useUnifiedTopology: true, useNewUrlParser: true })
  .then(() => {
    console.log('connected to mongoose');
    app.listen(PORT);
  })
  .catch((err) => console.error(err));

//register view engine
app.set('view engine', 'ejs');
//render views home dir
app.set('views', 'src/views');

//for req.body to work
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

//pages routes
app.use('/', pagesRoutes);

app.use('/owners', ownersRoutes);
app.use('/blog', blogRoutes);
app.use('/house', houseRoutes);
app.use('/comment', commentRoutes);

const staticPath = path.join(__dirname, 'static');
//statine direktorija, css, js , imgs ir kt statiniam failam
app.use(express.static(staticPath));

//isitraukti API route ir panaudoti cia , kad veiktu
//ta /api/blog yra musu paciu sukurtas , tai kai nueisi i localhost:3000/api/blog/...... gausim tai ka norim
app.use('/api/blog', apiRoutes);
app.use('/api/owners', apiOwnersRoutes);

//404 case , kai vartotojas ivede psl kurio nera
app.use((req, res) => res.status(404).send('Ops , page not found'));
