

var fs = require('fs');
var path = require('path');
var express = require('express');
var bodyParser = require('body-parser');
var app = express();
var router = express.Router();
app.use(express.static(__dirname + '/public'));
app.use(bodyParser());

const PORT = 8080;


function loop() {


    setImmediate(loop);
}

router.post('/fn/:fn', (req, res, next) => {

});

app.use('/api', router);

app.listen(PORT, () => {
    console.log('The server listening on port ' + PORT);
});


// start game loop
loop();