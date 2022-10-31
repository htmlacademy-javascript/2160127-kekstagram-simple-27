import { createArrayObjects } from './data.js';

const otherUsersPhotos = createArrayObjects();
const pictureTempldate = document
  .querySelector('#picture')
  .content.querySelector('a');

const pictureSection = document.querySelector('.pictures, .container');
const picturePlace = pictureSection.querySelector('.pictures__title');
picturePlace.classList.remove('visually-hidden');
const picturesFragment = document.createDocumentFragment();

otherUsersPhotos.forEach(({ url, description, likes, comments }) => {
  const pictureElem = pictureTempldate.cloneNode(true);
  pictureElem.querySelector('img').src = url;
  pictureElem.querySelector('img').alt = description;
  pictureElem.querySelector('.picture__comments').textContent = likes;
  pictureElem.querySelector('.picture__likes').textContent = comments;
  picturesFragment.appendChild(pictureElem);
});

pictureSection.appendChild(picturesFragment);
