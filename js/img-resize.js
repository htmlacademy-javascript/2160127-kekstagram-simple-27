const smallerButton = document.querySelector('.scale__control--smaller');
const biggerButton = document.querySelector('.scale__control--bigger');
const inputScaleValue = document.querySelector('.scale__control--value');
const image = document.querySelector('.img-upload__preview');

const STEP_SCALE = 25;
const ScaleValue = {
  MIN: 25,
  MAX: 100
};
const DEFAULT_SCALE = 100;

const scaleImage = (value = DEFAULT_SCALE) => {
  image.style.transform = `scale(${value / 100})`;
  inputScaleValue.value = `${value}%`;
};

const onSmallerButtonClick = () => {
  const currentValue = parseInt(inputScaleValue.value, 10);
  let newValue = currentValue - STEP_SCALE;
  if (newValue < ScaleValue.MIN) {
    newValue = ScaleValue.MIN;
  }
  scaleImage(newValue);
};

const onBiggerButtonClick = () => {
  const currentValue = parseInt(inputScaleValue.value, 10);
  let newValue = currentValue + STEP_SCALE;
  if (newValue > ScaleValue.MAX) {
    newValue = ScaleValue.MAX;
  }
  scaleImage(newValue);
};

smallerButton.addEventListener('click', onSmallerButtonClick);
biggerButton.addEventListener('click', onBiggerButtonClick);

const resetImg = () => {
  scaleImage();
};
export { resetImg };
