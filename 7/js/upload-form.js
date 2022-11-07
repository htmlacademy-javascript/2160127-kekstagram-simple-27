import { isEscapeKey } from './util.js';
const uploadFile = document.querySelector('#upload-file');
const closeButton = document.querySelector('#upload-cancel');

const popupForm = document.querySelector('.img-upload__overlay');
const body = document.body;

const pristine = new Pristine(popupForm, {
  classTo: 'img-upload__text',
  errorTextParent: 'img-upload__text',
  errorTextClass: 'img-upload__text__error-text'
});

body.addEventListener('submit', (evt) => {
  evt.preventDefault();
  pristine.validate();
});

const onDocumentKeydown = (evt) => {
  if (isEscapeKey(evt)) {
    evt.preventDefault();
    popupClose();
  }
};

function popupOpen() {
  popupForm.classList.remove('hidden');
  body.classList.add('modal-open');
  document.addEventListener('keydown', onDocumentKeydown);
}
function popupClose() {
  popupForm.classList.add('hidden');
  uploadFile.value = '';
  document.removeEventListener('keydown', onDocumentKeydown);
}

closeButton.addEventListener('click', () => {
  popupClose();
});

uploadFile.addEventListener('change', () => {
  popupOpen();
});
