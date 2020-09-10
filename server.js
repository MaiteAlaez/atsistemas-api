const express = require('express')
const cors = require('cors')
const phones = require('./mockData/Phones')

const app = express()
const port = 8080

app.use(cors({
  origin: [
    'http://localhost:3000'
  ]
}))

app.get('/phones', (req, res) => {
    res.send(phones)
})

app.get('/phones/:id', (req, res) => {
  const phone = phones.find(p => p.id === Number(req.params.id))
  res.send(phone)
})

app.use(express.static('public'))

app.listen(port, () => {
    console.log(`App listening on port ${port}`)
})
