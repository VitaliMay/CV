export class Router {
  constructor(pathRoutes) {
    this.routes = pathRoutes
    this.lastHash = ''

    // чтобы не терялся this и можно было удалять обработчик
    this.bindRouteManager = this.routeManager.bind(this)
    window.addEventListener('hashchange', this.bindRouteManager)
    this.routeManager()
  }

  static navigate(hash) {
    // Добавляем / если нет
    if (!hash.startsWith('/')) {
      hash = '/' + hash
    }
    window.location.hash = hash
  }

  routeManager() {
    const hash = window.location.hash.slice(1) || '/eng'

    if (this.lastHash === hash) {
      return
    }

    // Если хэш пустой → редирект
    if (!hash || hash === '/') {
      Router.navigate('/eng')
      return
    }

    // Добавляем / если нет
    if (!hash.startsWith('/')) {
      hash = '/' + hash
    }

    // Редирект устаревших маршрутов
    if (hash === '/test-cv') {
      Router.navigate('/eng')
      return
    }

    // Если хэш не изменился → выходим
    if (this.lastHash === hash) {
      return
    }

    this.lastHash = hash

    const routeFn = this.routes[hash] || this.routes['*']

    if (typeof routeFn === 'function') {
      routeFn()
    } else {
      console.error(`Route not found for path: ${hash}`)
    }
  }
}
