import { Router } from "./router.js"
import { langState, changeLang } from "./lang.js"
import { buttonLang } from "./variables.js"


const routeEng = () => {
  // langState.isEnglish = true
  changeLang()
}

const routeRus = () => {
  // langState.isEnglish = false
  changeLang()
}

export const routesPath = {
  '/eng': routeEng,
  '/rus': routeRus,
}

export const initChangeLang = () => {
  buttonLang.addEventListener('click', () => {
    // changeLang();
    // const { langCurrent, langNext } = langState
    // const newLang = langState.isEnglish ? langCurrent.toLowerCase() : langNext.toLowerCase();
    const { langCurrentMod, langNextMod } = langState
    const newLang = langState.isEnglish ? langCurrentMod : langNextMod;
    Router.navigate(`/${newLang}`);
  })
}

/******************************** */

// Создаем и экспортируем роутер
export const createRouter = () => {
  return new Router(routesPath);
};