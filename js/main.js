const COUNT_OBJECT = 25;
const DESCRIPTION = [
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
const COUNT_LIKES = {
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

const getRandomId = () => getRandomNumber(1, COUNT_OBJECT);
getRandomId();
const getrandonElementArray = (array) =>
  array[getRandomNumber(0, array.length - 1)];

const createPhoto = (index) => ({
  id: index,
  url: `photos/${index}.jpg`,
  description: Array.from({ length: getRandomNumber(2, 3) }, () =>
    getrandonElementArray(DESCRIPTION)
  )
    .map((x) => `#${x}`)
    .join(' '),
  likes: getRandomNumber(COUNT_LIKES.MIN, COUNT_LIKES.MAX),
  comments: getRandomNumber(COUNT_COMMENTS.MIN, COUNT_COMMENTS.MAX)
});
const createArrayObjects = () =>
  Array.from({ length: COUNT_OBJECT }, (_, photoIndex) =>
    createPhoto(photoIndex + 1)
  );
createArrayObjects();
