const loadResults = (results) => {
  const resultsDiv = document.getElementById('results-div')
  resultsDiv.innerHTML = ''
  const fragment = document.createDocumentFragment();

  results.forEach(result => {
    const div = document.createElement('div')
    div.className = 'article-div'

    const dDiv = document.createElement('div')
    dDiv.className = 'details-div'

    let date = Client.fixDate(result.published_at)
    const datep = document.createElement('p')
    datep.className = 'article-date'
    datep.innerText = date
    dDiv.appendChild(datep)

    let time = Client.fixTime(result.published_at)
    const timep = document.createElement('p')
    timep.className = 'article-time'
    timep.innerText = time
    dDiv.appendChild(datep)

    const sLink = document.createElement('a')
    sLink.className = 'source-link'
    sLink.href = result.source.home_page_url
    // pLink.setAttribute('target', '_blank')
    sLink.innerText = result.source.name
    dDiv.appendChild(sLink)
    div.appendChild(dDiv)

    const bDiv = document.createElement('div')
    bDiv.className = 'body-div'

    const h3 = document.createElement('h3')
    h3.className = 'article-title'
    h3.innerText = result.title
    bDiv.appendChild(h3)

    const pLink = document.createElement('a')
    pLink.className = 'article-link'
    pLink.href = result.links.permalink
    // pLink.setAttribute('target', '_blank')
    pLink.innerText = 'See Full Article'
    bDiv.appendChild(pLink)
    div.appendChild(bDiv)

    fragment.appendChild(div)
  })
  resultsDiv.appendChild(fragment);
}

export { loadResults }
