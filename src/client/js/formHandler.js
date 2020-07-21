const port = 8081

const submitForm = document.getElementById('submit-form');
submitForm.addEventListener('click', (e) => {
  e.preventDefault()
  const title = document.getElementById('title').value;
  handleSubmit(title);
})

async function handleSubmit(title) {
  console.log('You entered: ', title);
  try {
    const data = encodeURIComponent(title)
    const resultsDiv = document.getElementById('results-div');
    resultsDiv.innerHTML = `<p class='temp-text'>Collecting Data...</p>`;
    const response = await fetch(`http://localhost:${port}/aylien`, {
      method: 'POST',
      credentials: 'same-origin',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({ title: data })
    })
    const respData = await response.json()
    console.log("Returned", respData.length);

    if (respData.length === 0) {
      resultsDiv.innerHTML = `<p class="temp-text">Terribly sorry!  No results returned.  Please try again!</p>`;
    } else {
      Client.loadResults(respData);
    }
  } catch(e) {
    console.log('handleSubmit error: ', e);
  }
}

export { handleSubmit }
