// подсмотрел на https://learn.javascript.ru/task/random-int-min-max

function getRandomNumber(firstNumder, secondNumder) {
  if (firstNumder < 0 || secondNumder < 0) {
    return NaN;
  }
  if (firstNumder > secondNumder) {
    const max = firstNumder;
    const min = secondNumder;
    const rand = min + Math.random() * (max + 1 - min);
    return Math.floor(rand);
  } else {
    const rand = firstNumder + Math.random() * (secondNumder + 1 - firstNumder);
    return Math.floor(rand);
  }
}

function cheсkMaxLengthStr(str, maxLength) {
  const currentLength = str.length;
  if (maxLength >= currentLength) {
    return true;
  } else {
    return false;
  }
} // Результат: true, если строка проходит по длине, и false — если не проходит

// console.log(getRandomNumber(-20, -60));
// console.log(getRandomNumber(1, -6));
// console.log(getRandomNumber(-1, 6));
// console.log(getRandomNumber(0, 6));
// console.log(getRandomNumber(5, 0));
// console.log(cheсkMaxLengthStr("sdsd", 4));
// console.log(cheсkMaxLengthStr("sdsd", 3));
getRandomNumber(-20, -60);
cheсkMaxLengthStr('sdsd', 3);
