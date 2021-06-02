const express = require('express')
const request = require('request')
const app = express()

const PORT = process.env.PORT || 80

app.use(express.json({ extended: true }))

app.get('/', (req, res) => {
  try {
    request('https://jsonplaceholder.typicode.com/todos/1', (error, response, body) => {
      if (!error) {
        const stations = JSON.parse(body)
        res.json(stations)
      }
    })
  } catch (error) {
    res.status(500).json({ message: 'some message' })
  }
})

app.get('/about', (req, res) => {
  res.end('<h1>About page!</h1>')
})

app.get('/support', (req, res) => {
  res.end('<h1>Support page!</h1>')
})

app.listen(PORT, () => console.log('Server has been started...'))
