import { handleSubmit } from './js/formHandler'

console.log(handleSubmit);
console.log("Working");

const submitForm = document.getElementById('submit-form');
submitForm.addEventListener('click', (e) => {
  event.preventDefault()
  console.log('clicked');
  handleSubmit(e);
})
