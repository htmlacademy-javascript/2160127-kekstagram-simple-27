const image = document.querySelector('.img-upload__preview img');
const form = document.querySelector('.img-upload__form');
const sliderElement = document.querySelector('.effect-level__slider');
const effectLevelValue = document.querySelector('.effect-level__value');
const effectLevel = document.querySelector('.img-upload__effect-level');

const EFFECTS = {
  none: {
    step: 1,
    min: 0,
    max: 100
  },
  chrome: {
    style: 'grayscale',
    step: 0.1,
    min: 0,
    max: 1,
    unit: ''
  },
  sepia: {
    style: 'sepia',
    step: 0.1,
    min: 0,
    max: 1,
    unit: ''
  },
  marvin: {
    style: 'invert',
    step: 1,
    min: 0,
    max: 100,
    unit: '%'
  },
  phobos: {
    style: 'blur',
    step: 0.1,
    min: 0,
    max: 3,
    unit: 'px'
  },
  heat: {
    style: 'brightness',
    step: 0.1,
    min: 1,
    max: 3,
    unit: ''
  }
};

const DEFAULT_EFFECT = EFFECTS.none;
let chosenEffect = DEFAULT_EFFECT;
const isDefault = () => chosenEffect === DEFAULT_EFFECT;

const updateSlider = () => {
  effectLevel.classList.remove('hidden');
  sliderElement.noUiSlider.updateOptions({
    range: {
      min: chosenEffect.min,
      max: chosenEffect.max
    },
    step: chosenEffect.step,
    start: chosenEffect.max
  });
  if (isDefault()) {
    effectLevel.classList.add('hidden');
  }
};

const onFormChange = (evt) => {
  if (!evt.target.classList.contains('effects__radio')) {
    return;
  }
  chosenEffect = EFFECTS[evt.target.value];
  updateSlider();
};

const onSliderUpdate = () => {
  image.style.filter = 'none';
  effectLevelValue.value = '';
  if (isDefault()) {
    return;
  }
  const sliderValue = sliderElement.noUiSlider.get();

  image.style.filter = `${chosenEffect.style}(${sliderValue}${chosenEffect.unit})`;
  image.classList.add(`effects__preview--${chosenEffect.name}`);
  effectLevelValue.value = sliderValue;
};

const resetEffects = () => {
  chosenEffect = DEFAULT_EFFECT;
  updateSlider();
};
noUiSlider.create(sliderElement, {
  range: {
    min: DEFAULT_EFFECT.min,
    max: DEFAULT_EFFECT.max
  },
  start: DEFAULT_EFFECT.max,
  step: DEFAULT_EFFECT.step,
  connect: 'lower'
});

updateSlider();

form.addEventListener('change', onFormChange);
sliderElement.noUiSlider.on('update', onSliderUpdate);

export { resetEffects };
