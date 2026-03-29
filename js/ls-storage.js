export class MemoryStore {
  constructor() {
    this.storageKey = 'VitaliMay_CV_options'
    this.data = this.getData()
  }

  getData() {
    const lsOptions = localStorage.getItem(this.storageKey)

    if (!this.isLsEmpty(lsOptions)) {
      // если что-то есть
      try {
        return JSON.parse(lsOptions)
      } catch (e) {
        console.error('Error parsing localStorage:', e)
        return { lang: '' }
      }
    } else {
      return { lang: '' }
    }
  }

  setData() {
    // Получаем текущий язык из hash (без #)
    const currentLang = window.location.hash.slice(1) || '/eng'
    this.setLang(currentLang)
  }

  // Сохранить текущий hash как язык
  setData() {
    const lang = window.location.hash.slice(1) || '/eng'
    this.setLang(lang)
  }

  getLang() {
    return this.data && this.data.lang ? this.data.lang : '/eng'
  }

  setLang(lang) {
    this.data.lang = lang
    this.save()
  }

  save() {
    localStorage.setItem(this.storageKey, JSON.stringify(this.data))
  }

  clearStorage() {
    localStorage.removeItem(this.storageKey)
    this.data = { lang: '' }
  }

  isLsEmpty(obj) {
    return !obj || Object.keys(obj).length === 0
  }
}

export const storeLS = new MemoryStore()

// Логика: если hash есть (целенаправлено выбран язык), то к LS не обращаемся
// если hash нет, то язык беру из LS или eng
export const initLangLS = () => {
  const currentHash = window.location.hash.slice(1)
  const savedLang = storeLS.getLang()

  let finalLang

  if (currentHash) {
    finalLang = currentHash

    if (savedLang !== finalLang) {
      storeLS.setLang(finalLang)
    }
  } else if (savedLang) {
    finalLang = savedLang
    window.location.hash = finalLang
  } else {
    finalLang = '/eng'
    window.location.hash = finalLang
    storeLS.setLang(finalLang)
  }

  // Автосохранение
  const saveCurrentLang = () => {
    const lang = window.location.hash.slice(1) || '/eng'
    // чтобы восстановить стёртый (до #) hash
    if (!window.location.hash || window.location.hash === '#') {
      window.location.hash = storeLS.getLang()
      // console.log(storeLS.getLang())
      // window.location.hash = '/eng'
    }
    storeLS.setLang(lang)
  }

  window.addEventListener('beforeunload', saveCurrentLang)
  window.addEventListener('hashchange', saveCurrentLang)
}
