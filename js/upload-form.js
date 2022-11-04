import { isEscapeKey, isEnterKey } from './util.js';
const uploadFile = document.querySelector('#upload-file');
const closeButton = document.querySelector('#upload-cancel');

const popupForm = document.querySelector('.img-upload__overlay');
const body = document.querySelector('body');

const pristine = new Pristine(popupForm, {
  classTo: 'img-upload__text',
  errorTextParent: 'img-upload__text',
  errorTextClass: 'img-upload__text__error-text'
});
popupForm.addEventListener('submit', () => {
  pristine.validate();
});

const onPopupEscKeydown = (evt) => {
  if (isEscapeKey(evt)) {
    evt.preventDefault();
    popupClose();
  }
};

function clearUploadFile() {
  uploadFile.value = '';
}

function popupOpen() {
  popupForm.classList.remove('hidden');
  body.classList.add('modal-open');
  document.addEventListener('keydown', onPopupEscKeydown);
}
function popupClose() {
  popupForm.classList.add('hidden');
  clearUploadFile();
  document.removeEventListener('keydown', onPopupEscKeydown);
}

closeButton.addEventListener('click', () => {
  popupClose();
});

closeButton.addEventListener('keydown', (evt) => {
  if (isEnterKey(evt)) {
    popupClose();
  }
});

uploadFile.addEventListener('change', () => {
  popupOpen();
});
