const API_KEY = '23790821-6777a11e2db191613ff9bf1d2'
const BASE_URL = 'https://pixabay.com/api/'

function fetchImage(searchImages) {
    return fetch(
        `${BASE_URL}?key=${API_KEY}&image_type=photo&orientation=horizontal&q=${searchImages}&page=1&per_page=12`,
    )
        .then(result => result.json())
        .then(({ hits }) => hits)
}
export default { fetchImage }
