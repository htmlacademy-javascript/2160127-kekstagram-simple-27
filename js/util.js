const getRandomNumber = (firstNumder, secondNumder) => {
  if (firstNumder < 0 || secondNumder < 0) {
    return NaN;
  }
  const lower = Math.ceil(Math.min(firstNumder, secondNumder));
  const upper = Math.floor(Math.max(firstNumder, secondNumder));
  return Math.floor(Math.random() * (upper - lower + 1) + lower);
};

const isMaxLengthStr = (str, maxLength) => maxLength >= str.length;

const getRandomElementArray = (array) =>
  array[getRandomNumber(0, array.length - 1)];

const isEscapeKey = (evt) => evt.key === 'Escape';
const isEnterKey = (evt) => evt.key === 'Enter';

export {
  getRandomElementArray,
  isMaxLengthStr,
  getRandomNumber,
  isEscapeKey,
  isEnterKey
};
