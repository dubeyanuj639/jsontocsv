const express = require('express')
const app = express()
const PORT = 7000
const mongoose = require('mongoose');
mongoose.connect('mongodb://localhost:27017/json2csv', { useNewUrlParser: true, useUnifiedTopology: true }).then(done => {
    console.log('DataBase Connected')
}).catch(err => {
    console.log('DataBase not Connected', err)
})
const routes = require('./routes')
app.use(routes)
app.listen(PORT, (err, result) => {
    if (err) console.log('Getting Error ')
    else console.log("Server Connected on PORT->", PORT)
})




