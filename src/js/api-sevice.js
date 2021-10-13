const API_KEY = '23790821-6777a11e2db191613ff9bf1d2'
const BASE_URL = 'https://pixabay.com/api/'

export default class ApiService {
    constructor() {
        this.searchImages = ''
        this.page = 1
    }

    fetchImages() {
        const url = `${BASE_URL}?image_type=photo&orientation=horizontal&q=${this.searchImages}&page=${this.page}&per_page=15&key=${API_KEY}`
        return fetch(url).then(respose => respose.json())
    }

    resetPage() {
        this.page = 1
    }

    get images() {
        return this.searchImages
    }

    set images(newImages) {
        this.searchImages = newImages
    }
}
