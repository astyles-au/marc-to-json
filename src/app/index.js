const express = require('express')
const app = express()
const port = 3000

// public folder
app.use(express.static('public'))

// single http get end point for application
app.get('/', function(req, res) {
    res.sendFile(path.join(__dirname, '/index.html'));
  });

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})