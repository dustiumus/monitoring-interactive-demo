const express = require('express');
const path = require('path');
const app = express();
const Rollbar = require('rollbar')
const rollbar = new Rollbar({
  accessToken: 'f058fb712e2f46c4b2696bd8b9c8e4e4',
  captureUncaught: true,
  captureUnhandledRejections: true,
})

app.use(express.json());


app.get('/', function(req, res){
    rollbar.log('Hello world!')
    res.sendFile(path.join(__dirname, '/public/index.html'))
})


const port = process.env.PORT || 4545;
app.listen(port, function() {console.log(`Server jammin' on ${port}`)});

