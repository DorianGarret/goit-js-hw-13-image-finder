const API_KEY = '23790821-6777a11e2db191613ff9bf1d2'
const BASE_URL = 'https://pixabay.com/api/'

const queryString = require('query-string')
export default class ApiService {
    constructor() {
        this.searchQuery = ''
        this.page = 1
    }

    async fetchImages() {
        const searchParams = queryString.stringify({
            key: API_KEY,
            image_type: 'photo',
            orientation: 'horizontal',
            q: this.searchQuery,
            page: this.page,
            per_page: 12,
        })

        const url = `${BASE_URL}?${searchParams}`
        const response = await fetch(url)
        const { hits } = await response.json()
        this.nextPage()
        return hits
    }

    nextPage() {
        this.page += 1
    }

    resetPage() {
        this.page = 1
    }

    get query() {
        return this.searchQuery
    }

    set query(newQuery) {
        this.searchQuery = newQuery
        this.resetPage()
    }
}
