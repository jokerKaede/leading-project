const express = require("express");
const bodyParser = require('body-parser');
const nodemailer = require('nodemailer'); 
const schedule = require('node-schedule');

const server = express();

server.use(bodyParser.urlencoded({ extended: false }));
server.use(bodyParser.json());

var mailTransport = nodemailer.createTransport({
    service: '163',
    secureConnection: true,
    auth : {
        user : 'inquiry_leading@163.com',
        pass : 'AQVGRABRVTQZDHFO'
    }
});

var mailCount = 0;

schedule.scheduleJob('0 0 0 * * *', function() {
	mailCount = 0;
});

server.all('*', function (req, res, next) {
    res.header('Access-Control-Allow-Origin', '*');
    next();
});

server.post('/sendMail', function(req, res) {
	var params = req.body;
	var date = new Date();
	var displayDate = date.getDate();
	if (displayDate < 10) {
		displayDate = '0' + displayDate;
	}
	var mail = {
        from: 'inquiry_leading@163.com',
        to: params.to,
        subject: `我要询价 - ${'' + date.getFullYear() + (date.getMonth() + 1) + displayDate + '(' + (++mailCount) + ')'}`,
        text: params.content
    };
    mailTransport.sendMail(mail, function(err, msg) {
    	if (err) {
    		console.log(err);
    	}
    	res.status(200).end();
    });
});

server.listen(6001, function () {
    console.log('App listening on port 6001');
});

server.use('/', express.static('./'));
server.use('/about', express.static('./'));
server.use('/ipLicensing', express.static('./'));
server.use('/showcase', express.static('./'));
server.use('/contact', express.static('./'));
server.use('/inquiry', express.static('./'));
server.use('/showcase/fashion', express.static('./'));
server.use('/showcase/accessories', express.static('./'));
server.use('/showcase/catering', express.static('./'));
server.use('/showcase/household', express.static('./'));
server.use('/showcase/toys', express.static('./'));
