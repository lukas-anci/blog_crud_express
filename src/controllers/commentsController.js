const Comment = require('../models/comment');
const new_comment = (req, res) => {
  // res.sendFile(path.join(__dirname, 'pages', 'index.html'));
  const postId = req.params.postId;
  res.render('comments/newComment', {
    title: 'Add New comment',
    page: 'comment',
    postId,
  });
};

const new_comment_post = (req, res) => {
  const postId = req.params.postId;

  //sukurti nauja comment ir redirectinti i single blog page /sukurti paprasta html atvaizdavimui
  // const {name, comment } = req.body;
  // const newComment = new Comment({ commentNo, street, town, postId });
  const newComment = new Comment({ ...req.body, postId });
  console.log(newComment);

  newComment
    .save() //issaugom duomenis , kadangi asinchronine funkcija, reikia then
    .then(() => res.redirect('/blog/single/' + postId))
    .catch((err) => console.error(err));
};

module.exports = { new_comment, new_comment_post };
