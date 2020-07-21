import { handleSubmit } from './js/formHandler'
import { loadResults } from './js/resultsLoader'
import { fixDate, fixTime } from './js/fixIso'

import './styles/base.css'
import './styles/footer.css'
import './styles/form.css'
import './styles/header.css'
import './styles/results.css'

import "regenerator-runtime/runtime.js"

if ('serviceWorker' in navigator) {
  window.addEventListener('load', () => {
    navigator.serviceWorker.register('/service-worker.js')
    .then(reg => { console.log('SW registered: ', reg); })
    .catch(e => { console.log('SW registration failed: ', e); })
  })
}


export {
  handleSubmit,
  loadResults,
  fixDate,
  fixTime
}
