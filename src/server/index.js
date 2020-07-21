const path = require('path')
// const aylien = require('aylien_textapi')

const express = require('express')
const app = express()
// app.use(express.static('dist'))
app.use(express.static('src/client'))


const bodyParser = require('body-parser')
app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json())

const cors = require('cors')
app.use(cors())

const dotenv = require('dotenv').config()

const fetch = require('node-fetch')

const port = 8081
app.listen(port, () => {
    console.log(`Running on localhost: ${port}`)
})

app.get('/', (req, res) => {
    // res.sendFile('dist/index.html')
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
        return data
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
