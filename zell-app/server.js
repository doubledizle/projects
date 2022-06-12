const express = require('express')
const app = express()
const bodyParser= require('body-parser')
const cors = require('cors')
const PORT = 3000

app.use(cors())
app.use(bodyParser.urlencoded({ extended: true }))

app.listen(process.env.PORT || PORT, ()=>{
  console.log(`The server is now running on port ${PORT}`)
})

app.get('/', (req, res)=>{
  res.sendFile(__dirname + '/index.html')
})

app.post('/quotes', (req, res) => {
  console.log(req.body)
})
