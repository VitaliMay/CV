import { generalVarElements } from './variables.js'
// const scrollBtn = document.querySelector('.scroll-btn')

const { scrollBtn } = generalVarElements

const initScroll = () => {
  if (!scrollBtn) return

  const CLASSES = {
    SCROLL_VISIBLE: 'scroll-btn--visible',
  }

  const CONFIG = {
    MOBILE_BREAKPOINT: 768.9,
    SCROLL_POINT: 300,
    SCROLL_TARGET: 0,
  }

  scrollBtn.addEventListener('click', scrollUp)

  window.addEventListener('scroll', scrollBtnVisible)
  window.addEventListener('resize', scrollBtnVisible)

  function scrollUp() {
    window.scrollTo({
      top: CONFIG.SCROLL_TARGET,
    })
  }

  function scrollBtnVisible(event) {
    if (window.innerWidth <= CONFIG.MOBILE_BREAKPOINT) {
      // Проверка ширину окна
      if (document.documentElement.scrollTop > CONFIG.SCROLL_POINT) {
        // По ТЗ
        // if (document.documentElement.scrollTop > 64) { // Как только скрылось меню
        scrollBtn.classList.add(CLASSES.SCROLL_VISIBLE)
      } else {
        scrollBtn.classList.remove(CLASSES.SCROLL_VISIBLE)
      }
    } else {
      scrollBtn.classList.remove(CLASSES.SCROLL_VISIBLE)
    }
  }
}

export { initScroll }

// if (scrollBtn) {
//   scrollBtn.addEventListener('click', scrollUp)

//   window.addEventListener('scroll', scrollBtnVisible);
//   window.addEventListener('resize', scrollBtnVisible);
// }

// export { scrollBtn }
