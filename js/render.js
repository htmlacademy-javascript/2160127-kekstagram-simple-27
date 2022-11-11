//import { createArrayObjects } from './data.js';

//const otherUsersPhotos = createArrayObjects();
const pictureTempldate = document
  .querySelector('#picture')
  .content.querySelector('a');

const pictureSection = document.querySelector('.pictures');
const picturesFragment = document.createDocumentFragment();

const renderObject = (otherUsersPhotos) =>
  otherUsersPhotos.forEach(({ url, description, likes, comments }) => {
    const pictureElem = pictureTempldate.cloneNode(true);
    const pictureImg = pictureElem.querySelector('img');
    pictureImg.src = url;
    pictureImg.alt = description;
    pictureElem.querySelector('.picture__comments').textContent = likes;
    pictureElem.querySelector('.picture__likes').textContent = comments;
    picturesFragment.appendChild(pictureElem);
    // eslint-disable-next-line no-console
    console.log(url, description, likes, comments);
  });

pictureSection.appendChild(picturesFragment);

export { renderObject };
