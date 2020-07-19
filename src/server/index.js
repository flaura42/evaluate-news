const path = require('path')
// const aylien = require('aylien_textapi')

const express = require('express')
const app = express()
// app.use(express.static('dist'))
app.use(express.static('src/client'))


const dotenv = require('dotenv')
dotenv.config()

const cors = require('cors')
app.use(cors())

const bodyParser = require('body-parser')
app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json())

const port = 8080
app.listen(port, () => {
    console.log(`Running on localhost: ${port}`)
})

app.get('/', (req, res) => {
    // res.send('dist/index.html')
    res.send(path.resolve('src/client/views/index.html'))
})

const axios = require('axios');
app.post('/aylien', async(req, res) => {
  try {
    axios.get('https://api.aylien.com/news/stories', {
      params: {
        title: `${req.body.title}`
      },
      headers: {
        "X-AYLIEN-NewsAPI-Application-ID": process.env.APP_ID,
        "X-AYLIEN-NewsAPI-Application-Key": process.env.API_KEY
      }
    }).then(r => {
      const dataSet = r.data.stories;
      const info = dataSet.map(data => {
        return [
          // data.author.name,
          data.links.permalink,
          data.published_at,
          data.source.name,
          data.source.home_page_url,
          data.title
          // data.body
        ]
        // return data.title
      })
      console.log(info);
      res.send(info);
    });
  } catch(e) {
    console.log('error from aylien: ', e);
  }
})

const validateInputRequest = (req, res, next) => {
  console.log('validating');
  if (!req.body.url) {
    return res.status(400).json({
      message: 'invalid input'
    })
  }
  return next();
}
