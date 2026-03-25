
import { body, generalVarElements } from "./variables.js"
// const body = document.querySelector('body')
// const burgerButton = document.querySelector('.burger-button')
// const menu = document.querySelector('.menu')

const {menu, burgerButton} = generalVarElements

const CLASSES = {
  MENU_OPEN: 'open',
  BUTTON_ROTATE: 'rotade',
  BODY_LOCK: 'lock',
  MENU_LINK: 'menu__list-link',
};

// Конфигурация
const CONFIG = {
  MOBILE_BREAKPOINT: 768.9,
  ANIMATION_DELAY: 400
};

const initBurger = () => {

  // if (!menu || !burgerButton) return;

  if (burgerButton) {
    burgerButton.addEventListener("click", function(event) {
      menu.classList.toggle(CLASSES.MENU_OPEN)
      burgerButton.classList.toggle(CLASSES.BUTTON_ROTATE)
      body.classList.toggle(CLASSES.BODY_LOCK)
      // fon.classList.toggle('work')
    })
  }
  
  if (menu) {
    menu.addEventListener('click', burgerMenuLinkClose)
  }
  
  function burgerMenuLinkClose (event) {
    if (event.target.classList.contains(CLASSES.MENU_LINK)){
       closeMenu()
    }
  }
  
  
  function closeMenu() {
     menu.classList.remove(CLASSES.MENU_OPEN);
     burgerButton.classList.remove(CLASSES.BUTTON_ROTATE);
     body.classList.remove(CLASSES.BODY_LOCK);
  }
  
  
  window.addEventListener('resize', function() {
     if (window.innerWidth >= CONFIG.MOBILE_BREAKPOINT && menu.classList.contains(CLASSES.MENU_OPEN)) {
        closeMenu()
     }
  })
}


export { initBurger }