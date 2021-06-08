const express = require('express');
const router = express.Router();
// const blogs = require('../../data/blogDb');

router.use(express.json());

const Post = require('../../models/post');

router.post('/', (req, res) => {
  // const { title, author, body } = req.body;
  //sukuriam nauja posta pagal post.js sukurta modeli
  const newPost = new Post(
    req.body
    //   {
    //   title,
    //   author,
    //   body,
    // }
  );

  //kad issaugoti duomenu bazeje naudojam .save() metoda
  newPost
    .save() //issaugom duomenis , kadangi asinchronine funkcija, reikia then
    .then(() => res.json({ msg: 'success', redirect: '/blog' }))
    .catch((err) => console.error(err));
});

router.delete('/:id', (req, res) => {
  Post.findByIdAndRemove(req.params.id)
    .then((result) => {
      res.json({ msg: 'success', redirect: '/blog' });
    })
    .catch((err) => console.warn(err));
});

router.put('/', (req, res) => {
  //galima id paduoti i nuoroda ir su req.params.id galima pasigauti id
  //Post.findByIdAndUpdate(req.params.id, req.bdoy)
  //tada static updatePost funkcijoje reikia nurodyti adresa su paduotu id /id , kuri pasiemam is edit.js
  //paduodami currentId kaip argumenta, ir pasiemant static updatePoste
  const { _id, title, author, body } = req.body;

  Post.findByIdAndUpdate(_id, { title, author, body })
    .then((result) => {
      res.json({ msg: 'success', redirect: '/blog' });
    })
    .catch((err) => console.warn(err));
});

module.exports = router;
