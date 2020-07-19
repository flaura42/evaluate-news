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
  } catch(e) {
    console.log('handleSubmit error: ', e);
  }
}

export { handleSubmit }
