import getRefs from './get-refs'
import API from './api-sevice'
import imageCardTpl from '../handlebars/image-card.hbs'

const refs = getRefs()

refs.searchForm.addEventListener('submit', onSearch)

function onSearch(event) {
    event.preventDefault()
    refs.cardContainer.innerHTML = ''

    let form = event.currentTarget
    let searchQuery = form.elements.query.value

    API.fetchImage(searchQuery)
        .then(renderImageCard)
        .catch(onFetchError)
        .finally(() => form.reset())
}

function renderImageCard(image) {
    refs.cardContainer.insertAdjacentHTML('beforeend', imageCardTpl(image))
}

function onFetchError() {
    alert('ERROR')
}
