const express = require('express')
const port =  8080
const mongoose = require('mongoose')
const cors = require('cors')
const router = require('./router')

const app = express()

mongoose.connect('mongodb://localhost:27017/crud-react')
const db = mongoose.connection
db.once('open', ()=> {console.log('Database Connected')})
db.on('error', (error)=> {console.log(error)})

app.use(express.json())
app.use(cors())

app.use('/api', router)
app.use('/', (req,res) => {
  res.send('Hello Node!')
})

app.listen(port, ()=> console.log('Server Running'))