const express = require('express')
const cors = require('cors')
const bodyParser= require('body-parser')
const { response } = require('express')
const MongoClient = require('mongodb').MongoClient
const app = express()
const PORT = 5000


/* Promise syntax
*/

app.use(cors())
app.use(express.json())

MongoClient.connect('mongodb+srv://doubledizle:1MXG007DmVr3Kt7q@sonicboom.eelbv6e.mongodb.net/?retryWrites=true&w=majority')
  .then(client => {
    console.log('Connected to Database')
    const db = client.db('sf4-characters-api')
    const charCollection = db.collection('characters')
  //

  /* Middlewares
  */

  app.set('view engine', 'ejs')
    app.use(cors())
    app.use(bodyParser.urlencoded({ extended: true }))
    app.use(bodyParser.json())
    app.use(express.static('public'))
  //

  app.get('/', async (req, res) => {
    charCollection.find().toArray()
    .then(characters => {
      // console.log(characters)
      res.render('index.ejs', { characters: characters })
    })
    .catch(error => console.error(error))
  })
  
  app.get('/api/:fighterName', (req, res) =>{
    const fightersName = req.params.fighterName.toLowerCase()
    charCollection.find({name: fightersName}).toArray()
    .then(results => {
      console.log(results)
      res.json(results[0])
    })
    .catch(error => console.error(error))
  })

  app.put('/addLike', (request, response) => {
    db.collection('characters').updateOne({charName: request.body.itemFromJS},{
      
      $inc: {likes: 1}
    
    },{
        sort: {likes: -1},
        upsert: false
    })
    .then(result => {
        console.log(`${request.body.itemFromJS} liked`)
        response.json(`${request.body.itemFromJS} liked`)
    })
    .catch(error => console.error(error))

})


  /* Listen
  */

  app.listen(process.env.PORT || PORT, ()=>{
    console.log(`The server is now running on port ${PORT}`)
  })

})
.catch(error => console.error(error))
