import { handleSubmit } from './js/formHandler'

const submitForm = document.getElementById('submit-form');

submitForm.addEventListener('click', (e) => {
  e.preventDefault()
  const url = document.getElementById('url').value;
  handleSubmit(url);
})
