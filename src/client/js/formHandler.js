const handleSubmit = (e) => {
  event.preventDefault()
  let formText = document.getElementById('name').value
  console.log('You entered: ', formText);
}

export { handleSubmit }
