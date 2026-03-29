// import { body } from "./js/variables.js";
import { signatureScore } from './js/score.js'
import { initChangeLang } from './js/routes-path.js'

import { createRouter } from './js/routes-path.js'
import { Router } from './js/router.js'

import { initLangLS } from './js/ls-storage.js'

import { initDownload } from './js/downloadPDF.js'

import { linkPreventDefault } from './js/nav.js'

import { initBurger } from './js/burger.js'
import { initScroll } from './js/scroll.js'

// отменяю контекстное меню при длинном таче
// body.addEventListener('contextmenu', function (event) {
//   event.preventDefault();
// });

/************************************************** */
createRouter()

initChangeLang()

initLangLS()

initDownload()

window.addEventListener('load', () => {
  // Если все еще нет хэша (на всякий случай)
  if (!window.location.hash || window.location.hash === '#') {
    Router.navigate('/eng')
  }
})
/************************************************** */

signatureScore()

linkPreventDefault()
initBurger()
initScroll()
