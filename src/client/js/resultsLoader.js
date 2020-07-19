const loadResults = (results) => {
  const resultsDiv = document.getElementById('results')
  resultsDiv.innerHTML = ''
  const fragment = document.createDocumentFragment();

  results.forEach(result => {
    const div = document.createElement('div')

    const h3 = document.createElement('h3')
    h3.className = 'article-title'
    h3.innerText = result.title
    div.appendChild(h3)

    const pLink = document.createElement('a')
    pLink.className = 'article-link'
    pLink.href = result.links.permalink
    pLink.innerText = 'See Full Article'
    div.appendChild(pLink)

    let datef = result.published_at
    let month = datef.substring(5, 7)
    let day = datef.substring(8, 10)
    let year = datef.substring(0, 4)
    let hours = datef.substring(11, 13)
    let minutes = datef.substring(14, 16)
    let time
    if (hours <= 11) {
      time = `${hours}:${minutes} AM`
    }
    if (hours === 12) {
      time = `${hours}:${minutes} PM`
    }
    if( hours >= 13) {
      let newh = hours - 12
      time = `${newh}:${minutes} PM`
    }

    let date = `${month}/${day}/${year}   ${time}`

    const datep = document.createElement('p')
    datep.className = 'article-date'
    datep.innerText = date
    div.appendChild(datep)

    const sLink = document.createElement('a')
    sLink.className = 'source-link'
    sLink.href = result.source.home_page_url
    sLink.innerText = result.source.name
    div.appendChild(sLink)

    fragment.appendChild(div)
  })
  resultsDiv.appendChild(fragment);
}

export { loadResults }
