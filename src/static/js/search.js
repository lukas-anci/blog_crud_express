const searchBar = document.getElementById('search-bar');
const inputEl = document.getElementById('search-input');
const ownersContainer = document.querySelector('.owners-container');

import SearchOwners from './class/SearchOwner.class.js';

searchBar.addEventListener('submit', (event) => {
  event.preventDefault();

  new SearchOwners(inputEl, ownersContainer);
});

inputEl.addEventListener('input', () => {
  new SearchOwners(inputEl, ownersContainer);
});
