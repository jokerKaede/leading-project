const express = require("express")

const server = express();
   
server.listen(6001, function () {
    console.log('App listening on port 6001');
});

server.use('/', express.static('./'));
