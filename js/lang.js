import { buttonLang, langVarElements } from "./variables.js";
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
  },

  get langDisplay() {
    return this.isEnglish? this.langCurrentMod : this.langNextMod;
  },

  // Метод для переключения
  toggle() {
    this.isEnglish = !this.isEnglish;
  }
}

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

const updateButton = (langButton) => {
  buttonLang.textContent = langButton;
}

const changeLang = (langButton, langContent) => {
  // langState.isEnglish = !langState.isEnglish;
  langState.toggle()

  updateButton(langButton)
  updateContent(langContent);

  // console.log('Язык изменён на:', langState.isEnglish ? langNext : langCurrent);
};

/******************************** */

export { langState, changeLang }

