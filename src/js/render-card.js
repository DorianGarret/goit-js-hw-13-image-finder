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

async function fetchHits() {
    loadMoreBtn.disable()

    const featchImages = await API.fetchImages()
    try {
        //просто для реализации долгой загрузки
        setTimeout(function () {
            appendImagesMarkup(featchImages)
            loadMoreBtn.enable()
            loadMoreBtn.refs.button.scrollIntoView({
                behavior: 'smooth',
                block: 'start',
            })
        }, 200)
    } catch (error) {
        console.log(error)
    }
}

function appendImagesMarkup(images) {
    refs.imagesContainer.insertAdjacentHTML('beforeend', imageCardTpl(images))
}

function clearImagesContainer() {
    refs.imagesContainer.innerHTML = ''
}