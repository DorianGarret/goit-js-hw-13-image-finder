import './sass/main.scss'

import ApiService from './js/api-sevice'

const apiService = new ApiService()

apiService.images = 'cat'

apiService.fetchImages().then(hits => console.log(hits))
