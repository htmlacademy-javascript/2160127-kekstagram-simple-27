import { getRandomElementArray, getRandomNumber } from './util.js';
const COUNT_OBJECTS = 25;
const DESCRIPTIONS = [
  'Музыка',
  'Юмор',
  'Фото',
  'Россия',
  'Девушки',
  'Лига Добра',
  'Картинка',
  'Кот',
  'Ваза',
  'Ремонт техники',
  'Собака',
  'Картинка с текстом',
  'Боксёр',
  'Потеряшка'
];
const CountLikes = {
  MIN: 15,
  MAX: 200
};
const CountComments = {
  MIN: 0,
  MAX: 200
};

const createPhoto = (id) => ({
  id,
  url: `photos/${id}.jpg`,
  description: Array.from({ length: getRandomNumber(2, 3) }, () =>
    getRandomElementArray(DESCRIPTIONS)
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

export { createArrayObjects };
