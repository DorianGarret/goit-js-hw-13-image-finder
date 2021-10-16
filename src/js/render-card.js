import getRefs from './refs/get-refs'
import ApiService from './api/api-sevice'
import LoadMoreBtn from './components/load-more-btn'
import imageCardTpl from '../handlebars/image-card.hbs'

const refs = getRefs()
const API = new ApiService()
const loadMoreBtn = new LoadMoreBtn({
    selector: '[data-action="load-more"]',
    hidden: true,
})

refs.searchForm.addEventListener('submit', onSearch)
loadMoreBtn.refs.button.addEventListener('click', fetchHits)

function onSearch(event) {
    event.preventDefault()

    API.query = event.currentTarget.elements.query.value

    loadMoreBtn.show()

    clearImagesContainer()
    fetchHits()
}

function fetchHits() {
    loadMoreBtn.disable()
    API.fetchImages().then(images => {
        appendImagesMarkup(images)
        loadMoreBtn.enable()
    })
}

function appendImagesMarkup(images) {
    refs.imagesContainer.insertAdjacentHTML('beforeend', imageCardTpl(images))
}

function clearImagesContainer() {
    refs.imagesContainer.innerHTML = ''
}

function onFetchError() {
    alert('ERROR')
}
