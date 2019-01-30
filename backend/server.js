const express = require('express');
const logger = require('winston');
const app = express();
const port = 5000;

app.get('/', (request, response) => {
	response.send(`Hello, I'm alive`);
	logger.info('Responded to GET request on /')
});

app.get('/api/me', (request, response) => {
	response.send('{"name": "Even Skoglund", "location": "London"}');
	logger.info('Responded to GET request on /api/me')
});

app.get('/api/work', (request, response) => {
	response.send('[{"yearFrom": "2010", "yearTo": "2018", "place": "BBC Radio", "comment": "Was doing stuff"}, {"yearFrom": "2009", "yearTo": "2010", "place": "The coffee shop", "comment": "Making coffee"}]');
	logger.info('Responded to GET request on /api/work')
});

app.get('/api/education', (request, response) => {
	response.send('[{"yearFrom": "1994", "yearTo": "1997", "place": "Universitetet i Bergen", "comment": "Studying"}, {"yearFrom": "1997", "yearTo": "1998", "place": "University of Sussex", "comment": "Human Centered Computer Systems"}]');
	logger.info('Responded to GET request on /api/edu')
});

app.listen(port, (err) => {
  if (err) {
    return logger.error('something bad happened', err)
  }

  logger.info(`server is listening on ${port}`)
});
