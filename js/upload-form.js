import { isEscapeKey } from './util.js';
import { resetImg } from './img-resize.js';
import { resetEffects } from './img-effect.js';
import { sendData } from './server.js';

const uploadFile = document.querySelector('#upload-file');
const closeButton = document.querySelector('#upload-cancel');
const formImg = document.querySelector('#upload-select-image');
const uploadSubmit = formImg.querySelector('#upload-submit');

const messageSuccessTemplateElement = document
  .querySelector('#success')
  .content.querySelector('.success');
const messageErrorTemplateElement = document
  .querySelector('#error')
  .content.querySelector('.error');

const popupForm = document.querySelector('.img-upload__overlay');
const body = document.body;

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
  resetImg();
  resetEffects();
  formImg.reset();
}

const pristine = new Pristine(formImg, {
  classTo: 'img-upload__text',
  errorTextParent: 'img-upload__text',
  errorTextClass: 'img-upload__text__error-text'
});

function blockSubmitButton() {
  uploadSubmit.disabled = true;
  uploadSubmit.textContent = 'Публикация отправлена ...';
}

function unblockSubmitButton() {
  uploadSubmit.disabled = false;
  uploadSubmit.textContent = 'Опубликовать';
}

function getSuccessMesage() {
  const successFragment = document.createDocumentFragment();
  const clonedMessageSuccessTemplate =
    messageSuccessTemplateElement.cloneNode(true);
  successFragment.append(clonedMessageSuccessTemplate);
  body.append(successFragment);

  const successElement = document.querySelector('.success');
  const btnCloseSuccessElement =
    successElement.querySelector('.success__button');
  const onMesageEscKeydown = (evt) => {
    if (isEscapeKey(evt)) {
      evt.preventDefault();
      successElement.remove();
      uploadFile.value = '';
      resetImg();
      resetEffects();

      document.removeEventListener('keydown', onMesageEscKeydown);
      document.removeEventListener('click', onMesageDocument);
    }
  };

  document.addEventListener('keydown', onMesageEscKeydown);

  function onMesageDocument(evt) {
    if (evt.target === successElement) {
      evt.preventDefault();
      successElement.remove();
      uploadFile.value = '';
      resetImg();
      resetEffects();

      document.removeEventListener('keydown', onMesageEscKeydown);
      document.removeEventListener('click', onMesageDocument);
    }
  }

  document.addEventListener('click', onMesageDocument);

  btnCloseSuccessElement.addEventListener('click', (evt) => {
    evt.preventDefault();
    successElement.remove();
    document.removeEventListener('keydown', onMesageEscKeydown);
    document.removeEventListener('click', onMesageDocument);
  });
}

function getErrorMesage() {
  document.removeEventListener('keydown', onDocumentKeydown);

  const fragment = new DocumentFragment();
  const clonedMessageErrorTemplate =
    messageErrorTemplateElement.cloneNode(true);
  fragment.append(clonedMessageErrorTemplate);
  body.append(fragment);

  const errorElement = document.querySelector('.error');
  const btnCloseErrorElement = errorElement.querySelector('.error__button');

  const onMesageEscKeydown = (evt) => {
    if (isEscapeKey(evt)) {
      evt.preventDefault();
      errorElement.remove();

      document.removeEventListener('keydown', onMesageEscKeydown);

      document.removeEventListener('click', onMesageDocument);
      document.addEventListener('keydown', onDocumentKeydown);
    }
  };
  document.addEventListener('keydown', onMesageEscKeydown);

  function onMesageDocument(evt) {
    if (evt.target === errorElement) {
      evt.preventDefault();
      errorElement.remove();
      document.removeEventListener('keydown', onMesageEscKeydown);
      document.removeEventListener('click', onMesageDocument);
      document.addEventListener('keydown', onDocumentKeydown);
    }
  }

  document.addEventListener('click', onMesageDocument);

  btnCloseErrorElement.addEventListener('click', (evt) => {
    evt.preventDefault();
    errorElement.remove();
    document.removeEventListener('keydown', onMesageEscKeydown);
    document.removeEventListener('click', onMesageDocument);
  });
}

const loadPhotoFormSubmit = () => {
  formImg.addEventListener('submit', (evt) => {
    evt.preventDefault();

    const isValid = pristine.validate();

    if (isValid) {
      blockSubmitButton();
      sendData(
        () => {
          popupClose();
          resetEffects();
          resetImg();
          unblockSubmitButton();
          getSuccessMesage();
        },
        () => {
          getErrorMesage();
          unblockSubmitButton();
        },
        new FormData(evt.target)
      );
    }
  });
};

closeButton.addEventListener('click', () => {
  popupClose();
});

uploadFile.addEventListener('change', () => {
  popupOpen();
});

export { loadPhotoFormSubmit, getErrorMesage };
