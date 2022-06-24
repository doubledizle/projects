// Variables

const express = require('express')
const app = express()
const cors = require('cors')
const MongoClient = require('mongodb').MongoClient
require('dotenv').config()

let db,
    dbConnectionString = process.env.DB_STRING,
    dbName = 'full_stack_template',
    collection
  //--
//--

// DB Connection

MongoClient.connect(dbConnectionString)
  .then(client => {
    console.log('Connected to Database')
    db = client.db(dbName)
    collection = db.collection('items')
  })
//--


// Middlewares

app.set('view engine', 'ejs')
app.use(express.static('public'))
app.use(express.urlencoded({extended:true}))
app.use(express.json())

// Listener

app.listen(process.env.PORT || PORT, ()=>{
  console.log(`The server is running on port ${process.env.PORT}`)
})
