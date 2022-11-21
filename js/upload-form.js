import { isEscapeKey } from './util.js';
import { resetImg } from './img-resize.js';
import { resetEffects } from './img-effect.js';
import { sendData } from './server.js';

const uploadFile = document.querySelector('#upload-file');
const closeButton = document.querySelector('#upload-cancel');
const formImg = document.querySelector('#upload-select-image');
const uploadSubmit = formImg.querySelector('#upload-submit');

const popupForm = document.querySelector('.img-upload__overlay');
const body = document.body;

const onDocumentKeydown = (evt) => {
  if (isEscapeKey(evt)) {
    evt.preventDefault();
    popupClose();
  }
};

const popupOpen = () => {
  popupForm.classList.remove('hidden');
  body.classList.add('modal-open');
  document.addEventListener('keydown', onDocumentKeydown);
};
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

const blockSubmitButton = () => {
  uploadSubmit.disabled = true;
  uploadSubmit.textContent = 'Публикация отправлена ...';
};

const unblockSubmitButton = () => {
  uploadSubmit.disabled = false;
  uploadSubmit.textContent = 'Опубликовать';
};

const getMesage = (status) => {
  const messageTemplateElement = document
    .querySelector(`#${status}`)
    .content.querySelector(`.${status}`);

  if (status === 'error') {
    document.removeEventListener('keydown', onDocumentKeydown);
  }
  const fragment = new DocumentFragment();
  const clonedMessageTemplate = messageTemplateElement.cloneNode(true);
  fragment.append(clonedMessageTemplate);
  body.append(fragment);

  const element = document.querySelector(`.${status}`);
  const btnCloseElement = element.querySelector(`.${status}__button`);

  const onMesageEscKeydown = (evt) => {
    if (isEscapeKey(evt)) {
      evt.preventDefault();
      element.remove();
      document.removeEventListener('keydown', onMesageEscKeydown);
      document.removeEventListener('click', onMesageDocument);

      if (status === 'error') {
        document.addEventListener('keydown', onDocumentKeydown);
      }
    }
  };
  document.addEventListener('keydown', onMesageEscKeydown);

  function onMesageDocument(evt) {
    if (evt.target === element) {
      evt.preventDefault();
      element.remove();
      document.removeEventListener('keydown', onMesageEscKeydown);
      document.removeEventListener('click', onMesageDocument);
      if (status === 'error') {
        document.addEventListener('keydown', onDocumentKeydown);
      }
    }
  }
  document.addEventListener('click', onMesageDocument);
  btnCloseElement.addEventListener('click', (evt) => {
    evt.preventDefault();
    element.remove();
    document.removeEventListener('keydown', onMesageEscKeydown);
    document.removeEventListener('click', onMesageDocument);
  });
};

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
          getMesage('success');
        },
        () => {
          getMesage('error');
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

export { loadPhotoFormSubmit };
