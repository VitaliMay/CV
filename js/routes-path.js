import { Router } from "./router.js"
import { langState, changeLang } from "./lang.js"
import { buttonLang } from "./variables.js"


const routeEng = () => {
  const { langNext: langButton,  langCurrentMod: langContent } = langState;
  changeLang(langButton, langContent);
}

const routeRus = () => {
  const { langCurrent: langButton,  langNextMod: langContent } = langState;
  changeLang(langButton, langContent);
}

export const routesPath = {
  '/eng': routeEng,
  '/rus': routeRus,
}

export const initChangeLang = () => {
  buttonLang.addEventListener('click', () => {
    // const { langCurrentMod, langNextMod } = langState
    // const newLang = langState.isEnglish ? langCurrentMod : langNextMod;
    const newLang = langState.langDisplay
    Router.navigate(`/${newLang}`);
    // console.log(`click на Ланг ${newLang}`)
    // console.log(`click на isEnglish ${langState.isEnglish}`)
  })
}

/******************************** */

// Создаем и экспортируем роутер
export const createRouter = () => {
  return new Router(routesPath);
};