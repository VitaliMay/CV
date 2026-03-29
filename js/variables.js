const body = document.body

/******************************* */
const sidebarContainer = document.querySelector('.sidebar-container')
const buttonLang = sidebarContainer.querySelector('.sidebar-container__button')
const buttonDownload = sidebarContainer.querySelector('.sidebar-container__svg')
const spinner = document.querySelector('.spinner')

/******************************* */

const name = sidebarContainer.querySelector('.name__title_name')

const langVarElements = {
  name: sidebarContainer.querySelector('.name__title_name'),
  contactTitle: sidebarContainer.querySelector('.section-title_contact'),
  contactName: sidebarContainer.querySelector('.contact-item_name'),
  contactCity: sidebarContainer.querySelector('.contact-item_city'),
  contactCountry: sidebarContainer.querySelector('.contact-item_country'),
  skillsTitle: sidebarContainer.querySelector('.section-title_skills'),
  langTitle: sidebarContainer.querySelector('.section-title_lang'),
  langEng: sidebarContainer.querySelector('.skill-item__eng'),
  langRus: sidebarContainer.querySelector('.skill-item__rus'),
  langBelarus: sidebarContainer.querySelector('.skill-item__by'),
  langPl: sidebarContainer.querySelector('.skill-item__pl'),
  aboutTitle: sidebarContainer.querySelector('.section-title_about'),
  aboutContent: sidebarContainer.querySelector('.subtitle_about'),
  expTitle: sidebarContainer.querySelector('.section-title_exp'),
  expItem_01: sidebarContainer.querySelector('.education-item__exp_01'),
  gitTitle: sidebarContainer.querySelector('.section-title_git'),
  proTitle: sidebarContainer.querySelector('.section-title__pro'),
  eduTitle: sidebarContainer.querySelector('.section-title_edu'),
  eduUniver: sidebarContainer.querySelector('.title_education-univer'),
  eduUniverPro: sidebarContainer.querySelector('.subtitle_education-univer'),
  eduRSSPro: sidebarContainer.querySelector('.subtitle_education-rss'),
}

const generalVarElements = {
  menu: document.querySelector('.menu'),
  burgerButton: document.querySelector('.burger-button'),
  scrollBtn: document.querySelector('.scroll-btn'),
}

export { body, buttonLang, buttonDownload, spinner, langVarElements, generalVarElements }
