import {
  DESCRIPTIONS,
  CountLikes,
  CountComments,
  COUNT_OBJECTS
} from './data.js';

const getRandomNumber = (firstNumder, secondNumder) => {
  if (firstNumder < 0 || secondNumder < 0) {
    return NaN;
  }
  const lower = Math.ceil(Math.min(firstNumder, secondNumder));
  const upper = Math.floor(Math.max(firstNumder, secondNumder));
  return Math.floor(Math.random() * (upper - lower + 1) + lower);
};

const isMaxLengthStr = (str, maxLength) => maxLength >= str.length;

const getrandonElementArray = (array) =>
  array[getRandomNumber(0, array.length - 1)];

const createPhoto = (id) => ({
  id,
  url: `photos/${id}.jpg`,
  description: Array.from({ length: getRandomNumber(2, 3) }, () =>
    getrandonElementArray(DESCRIPTIONS)
  )
    .map((x) => `#${x}`)
    .join(' '),
  likes: getRandomNumber(CountLikes.MIN, CountLikes.MAX),
  comments: getRandomNumber(CountComments.MIN, CountComments.MAX)
});

const createArrayObjects = () =>
  Array.from({ length: COUNT_OBJECTS }, (_, photoIndex) =>
    createPhoto(photoIndex + 1)
  );
export { createArrayObjects, isMaxLengthStr };
