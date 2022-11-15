const URL_SERVER = 'https://27.javascript.pages.academy/kekstagram-simple';
const URL_PHOTOS = `${URL_SERVER}/data`;
import { showAlert } from './alert-message.js';

const getData = (onSuccess) => {
  fetch(URL_PHOTOS)
    .then((response) => response.json())
    .then(onSuccess)
    .catch((err) => {
      showAlert(`Ошибка сервера: ${err}`);
    });
};

const sendData = async (onSuccess, onFail, body) => {
  try {
    const response = await fetch(URL_SERVER, {
      method: 'POST',
      body
    });
    if (!response.ok) {
      throw new Error('Не удалось отправить форму.Попробуйте еще раз');
    }

    onSuccess();
  } catch (error) {
    onFail(error.message);
  }
};

export { getData, sendData };
