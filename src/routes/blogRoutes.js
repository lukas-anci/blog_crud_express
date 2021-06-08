const express = require('express');
const router = express.Router();

const blogControllers = require('../controllers/blogsController');

//blogs page
router.get('/', blogControllers.blogs_page);
//

//create blog page  /blog/create
router.get('/create', blogControllers.blog_create_page);

//single page route
router.get('/single/:id', blogControllers.blog_single);

//edit page route
router.get('/single/edit/:id', blogControllers.blog_edit_page);

module.exports = router;
