import { renderObject } from './render.js';
import './upload-form.js';
import './img-resize.js';
import './img-effect.js';

fetch('https://27.javascript.pages.academy/kekstagram-simple/data')
  .then((response) => response.json())
  .then((images) => {
    renderObject(images);
  });
