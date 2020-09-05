const express = require("express")

const server = express();
   
server.listen(6001, function () {
    console.log('App listening on port 6001');
});

server.use('/', express.static('./'));
server.use('/about', express.static('./'));
server.use('/ipLicensing', express.static('./'));
server.use('/showcase', express.static('./'));
server.use('/contact', express.static('./'));
server.use('/showcase/fashion', express.static('./'));
server.use('/showcase/accessories', express.static('./'));
server.use('/showcase/catering', express.static('./'));
server.use('/showcase/household', express.static('./'));
server.use('/showcase/toys', express.static('./'));
