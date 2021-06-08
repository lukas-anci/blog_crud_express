import MyFetch from './class/MyFetch.class.js';

const deleteBtn = document.getElementById('deleteBtn');
const post = document.getElementById('one-post');

deleteBtn.addEventListener('click', function () {
  const id = post.dataset.postId;
  MyFetch.deletePost(id, (result) => {
    result.redirect ? (window.location = result.redirect) : null;
  });
});
