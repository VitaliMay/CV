class DataService {
  constructor() {
    this.data = null; // Сначала данных нет
  }

  async initData() {
    // Если данные еще не загружены, загружаем их
    if (!this.data) {
      await this.getData();
    }
    return this.data; // Возвращаем данные
  }

  async getData() {
    let urlData = '../content.json' //для других возможных страниц, кроме index.html
    const pathPage = window.location.pathname
    const pathPageArrLastEl = pathPage.split('/').slice(-1)[0]

    if (!pathPageArrLastEl || pathPageArrLastEl === 'index.html') {
      urlData = './content.json'
    }

    const response = await fetch(`${urlData}`); // Получаем данные
    if (!response.ok) {
      throw new Error('Network response was not ok');
    }
    this.data = await response.json(); // Сохраняю данные в свойстве `data`
  }
}

// Singleton
const instanceDataService = new DataService();

export { instanceDataService }