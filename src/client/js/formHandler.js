const submitForm = document.getElementById('submit-form');
submitForm.addEventListener('click', (e) => {
  e.preventDefault()
  const title = document.getElementById('title').value;
  handleSubmit(title);
})

const handleSubmit = async(title) => {
  console.log('You entered: ', title);
  try {
    const data = encodeURIComponent(title)
    const resultsDiv = document.getElementById('results');
    resultsDiv.innerText = 'Collecting Data...';
    const response = await fetch('http://localhost:8080/aylien', {
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
      resultsDiv.innerText = 'Terribly sorry!  No results.';
    } else {
      Client.loadResults(respData);
    }
  } catch(e) {
    console.log('handleSubmit error: ', e);
  }
}

export { handleSubmit }
