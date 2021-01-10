const express = require('express');
const request = require('request');
const http = require('https');

const app = express();

app.use(function(req, res, next) {
  res.set('Access-Control-Allow-Origin', '*');
  res.set('Access-Control-Expose-Headers', 'Content-Length');
	next();
});

const VIDEO_URL = 'https://www.youtube.com/get_video_info?html5=1&video_id=';

app.get('/video_info', function(req, res) {
	request(VIDEO_URL + req.query.video_id, (err, response) => {
		if (err) res.status(500).send(err);
		res.send(response.body);
	});
});

app.listen(8082);
