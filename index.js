const express = require('express')
const bodyParser = require('body-parser')
const app = express()
const http = require('http')
const port = 3000
const chatgpt = require('./routes/chatgpt');

/*app.get('/', (req, res) => {
  res.send('Hello World!')
})*/

//routes
app.post('/chatgpt/getResults',chatgpt.getResults);

app.use('/',express.static('dist'));

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})
