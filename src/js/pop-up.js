import * as basicLightbox from 'basiclightbox'
import 'basiclightbox/dist/basicLightbox.min.css'
import getRefs from './refs/get-refs'

const refs = getRefs()

refs.imagesContainer.addEventListener('click', openPopUp)

function openPopUp(event) {
    event.preventDefault()

    if (event.target.nodeName !== 'IMG') return

    const popUp = basicLightbox.create(`<img src=${event.target.dataset.fullsize}/>`)
    popUp.show()
}
