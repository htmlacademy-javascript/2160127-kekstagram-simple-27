const TIME = 5000;
const divError = document.querySelector('.error_div_get');
const showAlert = (message) => {
  divError.textContent = message;
  divError.classList.remove('visually-hidden');
  setTimeout(() => {
    divError.classList.add('visually-hidden');
  }, TIME);
};

export { showAlert };
