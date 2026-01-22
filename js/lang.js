import { buttonLang, langVarElements } from "./variables.js";
// import { contentData } from "./content.js";
import { instanceDataService } from "./data-service.js";

const langState = {
  isEnglish: true,
  langCurrent: 'Eng',
  langNext: 'Rus',

  get langCurrentMod() {
    return this.langCurrent.toLowerCase();
  },

  get langNextMod() {
    return this.langNext.toLowerCase();
  }
}

const langValid = () => {
  const {langCurrentMod, langNextMod} = langState;
  const langTagetMod = langState.isEnglish ? langNextMod : langCurrentMod;
  return langTagetMod
}

// const updateContent = (lang) => {

//   for (const [key, element] of Object.entries(langVarElements)) {
//     if (contentData[key] && element) {
//       element.textContent = contentData[key][lang];
//     }
//   }
// };

/************************************************** */
const updateContent = async (lang) => {

  try {
    const contentDataArr = await instanceDataService.initData()
    const contentData = Array.isArray(contentDataArr) ? contentDataArr[0] : contentDataArr;

    for (const [key, element] of Object.entries(langVarElements)) {
      if (contentData[key] && element) {
        element.textContent = contentData[key][lang];
      }
    }
  } catch (error) {
    console.error('Error fetching data:', error);
  }
};


/************************************************* */

const langButton = () => {
  const { langCurrent, langNext } = langState;
  const langTaget = langState.isEnglish ? langCurrent : langNext;
  return langTaget
}

const updateButton = (langTaget) => {
  buttonLang.textContent = langTaget;
}

// лучше ввести язык контента и кнопки как аргумент (для большей ясности)
const changeLang = () => {
  langState.isEnglish = !langState.isEnglish;

  const langMod = langValid()
  const langTaget = langButton()
  updateButton(langTaget)
  updateContent(langMod);

  // console.log('Язык изменён на:', langState.isEnglish ? langNext : langCurrent);
};

/******************************** */

export { langState, changeLang }

