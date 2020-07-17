// const url = 'http://localhost:8080/';
// const url = `http://localhost:8080/sentiment?${encodeURIComponent(query)}`;

const handleSubmit = async(query) => {
  console.log('You entered: ', query);
  try {
    // const attempt = encodeURIComponent(query)
    // console.log('attempting: ', attempt);

    const req = await fetch('/post', {
      method: 'POST',

      credentials: 'same-origin',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(query)
    })
  } catch(e) {
    console.log('handleSubmit error: ', e);
  }

}

export { handleSubmit }
