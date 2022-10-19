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
const COUNT_COMMENTS = {
  MIN: 0,
  MAX: 200
};
const getRandomNumber = (firstNumder, secondNumder) => {
  if (firstNumder < 0 || secondNumder < 0) {
    return NaN;
  }
  const lower = Math.ceil(Math.min(firstNumder, secondNumder));
  const upper = Math.floor(Math.max(firstNumder, secondNumder));
  return Math.floor(Math.random() * (upper - lower + 1) + lower);
};

const isMaxLengthStr = (str, maxLength) => maxLength >= str.length;
getRandomNumber(-20, -60);
isMaxLengthStr('sdsd', 3);

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
  comments: getRandomNumber(COUNT_COMMENTS.MIN, COUNT_COMMENTS.MAX)
});
const createArrayObjects = () =>
  Array.from({ length: COUNT_OBJECTS }, (_, photoIndex) =>
    createPhoto(photoIndex + 1)
  );
createArrayObjects();
