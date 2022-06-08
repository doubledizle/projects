const express = require('express')
const app = express()
const cors = require('cors')
const PORT = 8000

app.use(cors())

const rappers = {
  '21 savage': {
    'age': 29,
    'birthName': 'Sheyaa Bin Abraham-Joseph' ,
    'birthLocation': 'London, England'
  },
  'chance the rapper': {
    'age': 29,
    'birthName': 'Chancelor Bennett',
    'birthLocation': 'Chicago, Illinois'
  },
  'unknown': {
    'age': 0,
    'birthName': 'unknown',
    'birthLocation': 'unknown'
  }
}

app.get('/', (req, res)=>{
  res.sendFile(__dirname + '/index.html')
})

app.get('/api/:rapperName', (req, res) =>{
  const rappersName = req.params.rapperName.toLowerCase()
  if (rappers[rappersName]) {
    res.json(rappers[rappersName])
  }else {
    res.json(rappers['unknown'])
  }
})

app.listen(process.env.PORT || PORT, ()=>{
  console.log(`The server is now running on port ${PORT}`)
})
