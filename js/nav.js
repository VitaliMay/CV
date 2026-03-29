// const links = document.querySelectorAll('.menu__list-link');

//       export const linkPreventDefault = () => {

//         links.forEach(link => {
//             link.addEventListener('click', function(event) {
//                 event.preventDefault(); // предотвращаем изменение URL

//                 const targetId = this.getAttribute('href'); // получаем id целевой секции
//                 const targetSection = document.querySelector(targetId); // находим целевую секцию

//                 // Прокручиваем к целевой секции
//                 targetSection.scrollIntoView({ behavior: 'smooth' });
//             });
//         });
//       }

export const linkPreventDefault = () => {
  const menu = document.querySelector('.menu__list')

  // Проверяем, существует ли меню на странице
  if (!menu) return

  menu.addEventListener('click', (event) => {
    // Ищем ближайший элемент с классом 'menu__list-link' от места клика
    const link = event.target.closest('.menu__list-link')

    // Если кликнули не по ссылке или ссылка не найдена — выходим
    if (!link) return

    // Предотвращаем переход по ссылке
    event.preventDefault()

    // Получаем id целевой секции
    const targetId = link.getAttribute('href')

    // Проверяем, что href начинается с "#" (это якорь)
    if (targetId && targetId.startsWith('#')) {
      const targetSection = document.querySelector(targetId)

      // Если секция найдена — скроллим к ней
      if (targetSection) {
        targetSection.scrollIntoView({ behavior: 'smooth' })
      }
    }
  })
}
