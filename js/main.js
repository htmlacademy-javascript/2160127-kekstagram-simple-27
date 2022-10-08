// подсмотрел на https://learn.javascript.ru/task/random-int-min-max
const randomInteger = (min, max) =>
  Math.round(min - 0.5 + Math.random() * (max - min + 1));

const getRandomNumber = (firstNumder, secondNumder) => {
  if (firstNumder < 0 || secondNumder < 0) {
    return NaN;
  }
  if (firstNumder > secondNumder) {
    return randomInteger(secondNumder, firstNumder);
  } else {
    return randomInteger(firstNumder, secondNumder);
  }
};

const isMaxLengthStr = (str, maxLength) => maxLength >= str.length;
getRandomNumber(-20, -60);
isMaxLengthStr('sdsd', 3);
