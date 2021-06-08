const Post = require('../models/post');
const Comment = require('../models/comment');

const blogs_page = (req, res) => {
  Post.find()
    .sort({ updatedAt: -1 }) //isrikiuoja pagal sukurimo laika
    .then((result) => {
      res.render('blog/blogs', {
        title: 'Blog',
        page: 'blog',
        blogs: result,
      });
    })
    .catch((err) => console.error(err.message));
};

const blog_create_page = (req, res) => {
  // res.sendFile(path.join(__dirname, 'pages', 'blogs.html'));
  res.render('blog/createBlog', {
    title: 'Create Blog',
    page: 'createB',
  });
};

const blog_single = async (req, res) => {
  const blogId = req.params.id;
  //kur blogId sutampa su req.params.id , tuos tik atrinksim i find

  try {
    const comments = await Comment.find({ postId: blogId }).exec();
    const currentPost = await Post.findById(blogId);
    res.render('blog/singlePage', {
      title: 'single post',
      page: 'post_single',
      result: currentPost,
      blogId,
      comments,
    });
  } catch (error) {
    console.log(error);
    res.redirect('/');
    //klaidos gaudymas try catch bloke
  }
};

const blog_edit_page = (req, res) => {
  const blogId = req.params.id;
  Post.findById(blogId).then((result) => {
    res.render('blog/singlePageEdit', {
      title: 'Edit',
      page: 'edit',
      result,
      blogId,
    });
  });
};

module.exports = {
  blogs_page,
  blog_create_page,
  blog_single,
  blog_edit_page,
};
