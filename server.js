const express = require('express')
const app = express()

const PORT = process.env.PORT || 80

app.use(express.json({ extended: true }))

app.get('/', (req, res) => {
  try {
    res.end(`<h1>Home page server file. Test value - ${process.env.TEST}.</h1>`)
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

app.listen(PORT, () => [console.log('Server has been started...')])
