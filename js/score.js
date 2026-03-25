
const score = `
Привет. Вроде всё по ТЗ)
Переключение языка иногда глючит,
но после обновления страницы приходит в чувство.

A вот этот вариант точно-точно по ТЗ:
https://VitaliMay.github.io/rsschool-cv/

Успехов в учёбе)

`

function signatureScore () {
  console.log(score)
  console.log(
    '%c   /\\     /\\  \n  //\\\\___//\\\\\n  \\\\       //\n   \\\\o _ \o//    \n    \\ /=\\ /  \n       \' ',
    'color: orange; font-weight: bold; font-size: 12px;'
  );
}

export { signatureScore }