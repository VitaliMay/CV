import { buttonLang, langVarElements } from "./variables.js";
import { contentData } from "./content.js";

const langState = {
  isEnglish: true,
  langCurrent: 'Eng',
  langNext: 'Rus',
}

// const contentData = {
//   name: {
//     eng: 'Vitali Maevski',
//     rus: 'Виталий Маевский'
//   },
//   contactTitle: {
//     eng: 'Contact information',
//     rus: 'Личные данные',
//   },
//   contactName: {
//     eng: 'Vitali Maevski',
//     rus: 'Виталий Маевский'
//   },
//   contactCity: {
//     eng: '220121 Minsk',
//     rus: '220121 Минск'
//   },
//   contactCountry: {
//     eng: 'Belarus',
//     rus: 'Беларусь'
//   },
//   skillsTitle: {
//     eng: 'Skills',
//     rus: 'Навыки'
//   },
//   langTitle: {
//     eng: 'Languages',
//     rus: 'Языки'
//   },
//   langEng: {
//     eng: 'English',
//     rus: 'Английский'
//   },
//   langRus: {
//     eng: 'Russian',
//     rus: 'Русский'
//   },
//   langBelarus: {
//     eng: 'Belorussian',
//     rus: 'Белорусский'
//   },
//   langPl: {
//     eng: 'Polish',
//     rus: 'Польский'
//   },
//   aboutTitle: {
//     eng: 'About Me',
//     rus: 'О себе'
//   },
//   expTitle: {
//     eng: 'Work experience',
//     rus: 'Опыт работы'
//   },
// }

/************************************************** */

// const changeLangName = () => {
//   const { name } = langVarElements;
//   const { name: tempLang } = contentObj;
//   // name.textContent = 'Vitali Maevski'
//   name.textContent = langState.isLangEng ? tempLang.eng : tempLang.rus;
// }

// const changeContactTitle = () => {
//   const { contactTitle } = langVarElements;
//   const { contactTitle: tempLang } = contentObj;
//   contactTitle.textContent = langState.isLangEng ? tempLang.eng : tempLang.rus;
// }

// const changeContactName = () => {
//   const { contactName } = langVarElements;
//   const { contactName: tempLang } = contentObj;
//   contactName.textContent = langState.isLangEng ? tempLang.eng : tempLang.rus;
// }

// const changeContactCity = () => {
//   const { contactCity } = langVarElements;
//   const { contactCity: tempLang } = contentObj;
//   contactCity.textContent = langState.isLangEng ? tempLang.eng : tempLang.rus;
// }

// const changeContactCountry = () => {
//   const { contactCountry } = langVarElements;
//   const { contactCountry: tempLang } = contentObj;
//   contactCountry.textContent = langState.isLangEng ? tempLang.eng : tempLang.rus;
// }

// function changeLang () {
//   const {langCurrent, langNext} = langState;
//   langState.isLangEng = !langState.isLangEng;
//   const langTarget = langState.isLangEng ? langCurrent : langNext;
//   // const langState = langObj.isLangEng ? langFirst : langSecond;
//   buttonLang.textContent = langTarget;

//   changeLangName()
//   changeContactTitle()
//   changeContactName()
//   changeContactCity()
//   changeContactCountry()

//   console.log('Меняю язык')
// }

/******************************** */

// const changeContent = () => {
//   const {langCurrent, langNext} = langState;
//   langState.isEnglish = !langState.isEnglish;
//   const langTaget = langState.isEnglish ? langCurrent : langNext;
//   const langTagetMod = langState.isEnglish ? langNext.toLowerCase() : langCurrent.toLowerCase();
//   // const langTagetMod = langTaget.toLowerCase()
//   buttonLang.textContent = langTaget;

//   for (const [key, element] of Object.entries(langVarElements)) {
//     if (contentObj[key] && element) {
//       element.textContent = contentObj[key][langTagetMod];
//     }
//   }
// };

const updateContent = () => {
  const {langCurrent, langNext} = langState;
  const langTagetMod = langState.isEnglish ? langNext.toLowerCase() : langCurrent.toLowerCase();

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

  console.log('Язык изменён на:', langState.isEnglish ? langNext : langCurrent);
};

/******************************** */

const initChangeLang = () => {
  buttonLang.addEventListener('click', changeLang)
}

export { initChangeLang }

