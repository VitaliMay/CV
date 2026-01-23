// import { body } from "./js/variables.js";
import { signatureScore } from "./js/score.js";
import { initChangeLang } from "./js/routes-path.js";

import { createRouter } from "./js/routes-path.js";
import { Router } from "./js/router.js";

// отменяю контекстное меню при длинном таче
// body.addEventListener('contextmenu', function (event) {
//   event.preventDefault();
// });

/************************************************** */
createRouter();

initChangeLang()

window.addEventListener('load', () => {
  // Если все еще нет хэша (на всякий случай)
  if (!window.location.hash || window.location.hash === '#') {
    Router.navigate('/eng');
  }
});
/************************************************** */

signatureScore()


