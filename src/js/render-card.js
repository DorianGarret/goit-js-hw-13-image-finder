import imageCardTpl from '../handlebars/image-card.hbs'

const cardContainer = document.querySelector('.js-card-container')

fetch(
    'https://pixabay.com/api/?image_type=photo&orientation=horizontal&q=horizont&page=1&per_page=12&key=23790821-6777a11e2db191613ff9bf1d2',
)
    .then(result => result.json())
    .then(data => {
        return data.hits
    })
    .then(cat => {
        const markup = imageCardTpl(cat)
        console.log(markup)
        cardContainer.innerHTML = markup
    })
