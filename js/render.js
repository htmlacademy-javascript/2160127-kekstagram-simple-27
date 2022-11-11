const pictureTempldate = document
  .querySelector('#picture')
  .content.querySelector('a');

const pictureSection = document.querySelector('.pictures');

const renderObject = (otherUsersPhotos) =>
  otherUsersPhotos.forEach(({ url, description, likes, comments }) => {
    const picturesFragment = document.createDocumentFragment();
    const pictureElem = pictureTempldate.cloneNode(true);
    const pictureImg = pictureElem.querySelector('img');
    pictureImg.src = url;
    pictureImg.alt = description;
    pictureElem.querySelector('.picture__comments').textContent = likes;
    pictureElem.querySelector('.picture__likes').textContent = comments;
    picturesFragment.appendChild(pictureElem);
    pictureSection.appendChild(picturesFragment);
  });

export { renderObject };
