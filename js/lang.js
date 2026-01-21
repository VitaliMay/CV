import { buttonLang, langVarElements } from "./variables.js";
import { contentData } from "./content.js";
// import { Router } from "./router.js";

const langState = {
  isEnglish: true,
  langCurrent: 'Eng',
  langNext: 'Rus',
}


const updateContent = () => {
  const {langCurrent, langNext} = langState;
  const langTagetMod = langState.isEnglish ? langNext.toLowerCase() : langCurrent.toLowerCase();

  // Router.navigate(`/${langTagetMod}`)

  for (const [key, element] of Object.entries(langVarElements)) {
    if (contentData[key] && element) {
      element.textContent = contentData[key][langTagetMod];
    }
  }
};

const changeLang = () => {
  const {langCurrent, langNext} = langState;
  langState.isEnglish = !langState.isEnglish;
  const langTaget = langState.isEnglish ? langCurrent : langNext;
  buttonLang.textContent = langTaget;

  updateContent();

  // console.log('Язык изменён на:', langState.isEnglish ? langNext : langCurrent);
};

/******************************** */

// const initChangeLang = () => {
//   buttonLang.addEventListener('click', changeLang)
// }

export { langState, changeLang }
// export { initChangeLang, langState, changeLang }

