import { body } from "./js/variables.js";
import { signatureScore } from "./js/score.js";

import { initChangeLang } from "./js/lang.js";

// отменяю контекстное меню при длинном таче
body.addEventListener('contextmenu', function (event) {
  event.preventDefault();
});


/************************************************** */

initChangeLang()

/************************************************** */

signatureScore()


