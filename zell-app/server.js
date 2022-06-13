const express = require('express')
const cors = require('cors')
const bodyParser= require('body-parser')
const MongoClient = require('mongodb').MongoClient
const app = express()
const PORT = 3000


/* Standard syntax - replaced by promise syntax
*/
// MongoClient.connect('mongodb+srv://doubledizle:F7uG6L2umEpHZZ4T@cluster0.kthw8ry.mongodb.net/?retryWrites=true&w=majority', (err, client) => {
//   if (err) return console.error(err)
//   console.log('Connected to Database')
// })


/* Promise syntax
*/
MongoClient.connect('mongodb+srv://doubledizle:F7uG6L2umEpHZZ4T@cluster0.kthw8ry.mongodb.net/?retryWrites=true&w=majority', {useUnifiedTopology: true})
  .then(client => {
    console.log('Connected to Database')
    const db = client.db('star-wars-quotes')
    const quotesCollection = db.collection('quotes')

    /* Middlewares
    */

    app.set('view engine', 'ejs')
    app.use(cors())
    app.use(bodyParser.urlencoded({ extended: true }))
    app.use(bodyParser.json())
    app.use(express.static('public'))

    /* Routes
    */

    app.get('/', (req, res) => {
      db.collection('quotes').find().toArray()
        .then(quotes => {
          res.render('index.ejs', { quotes: quotes })
        })
        .catch(/* ... */)
    })

    app.post('/quotes', (req, res) => {
      quotesCollection.insertOne(req.body)
        .then(result => {
          res.redirect('/')
        })
        .catch(error => console.error(error))
    })

    app.put('/quotes', (req, res) => {
      quotesCollection.findOneAndUpdate(
        { name: 'Yoda' },
        {
          $set: {
            name: req.body.name,
            quote: req.body.quote
          }
        },
        {
          upsert: true
        }
      )
        .then(result => res.json('Success'))
        .catch(error => console.error(error))
    })

    app.delete('/quotes', (req, res) => {
      quotesCollection.deleteOne(
        { name: req.body.name }
      )
        .then(result => {
          if (result.deletedCount === 0) {
            return res.json('No quote to delete')
          }
          res.json('Deleted Darth Vadar\'s quote')
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
// ...


