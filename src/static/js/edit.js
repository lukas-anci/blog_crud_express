import MyFetch from './class/MyFetch.class.js';

const post = document.getElementById('one-post');
const editForm = document.getElementById('edit-form');
const currentId = editForm.dataset.postId;

editForm.addEventListener('submit', function (event) {
  event.preventDefault();

  const formData = new FormData(editForm);
  formData.append('_id', currentId);
  //pavercia formData i json formata
  const jsonFormData = JSON.stringify(Object.fromEntries(formData));
  // console.log(jsonFormData);
  MyFetch.updatePost(jsonFormData, (result) => {
    console.log(result);

    //redirecting to /blogs after submit
    result.redirect ? (window.location = result.redirect) : null;
  });
});
