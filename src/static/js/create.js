import MyFetch from './class/MyFetch.class.js';

const mainForm = document.getElementById('form');

// MyFetch.getPosts()
//   .then((posts) => console.log(posts))
//   .catch((err) => console.error(err));

// const newPostData = {
//   title: ,
//   author: ,
//   body:,
// };
// const jsonData = JSON.stringify(newPostData);

// MyFetch.createPost(jsonData, (data) => {
//   data.redirect ? (window.location = data.redirect) : null;
// });

mainForm.addEventListener('submit', function (event) {
  event.preventDefault();
  console.log('sustabdem forma nuo issiuntimo');
  //supakuojam formos duomenis i integruota JS klase FormData
  const formData = new FormData(mainForm);
  //pavercia formData i json formata
  const jsonFormData = JSON.stringify(Object.fromEntries(formData));
  // console.log(jsonFormData);
  MyFetch.createPost(jsonFormData, (result) => {
    //redirecting to /blogs after submit
    result.redirect ? (window.location = result.redirect) : null;
  });
});
