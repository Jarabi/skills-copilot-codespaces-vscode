// Create web server
// Create a comments array
// Create a POST /comments route that accepts JSON and adds it to the comments array
// Create a GET /comments route that returns the comments array in JSON format
// Create a DELETE /comments route that resets the comments array to an empty array

const express = require('express');
const app = express();
const bodyParser = require('body-parser');
app.use(bodyParser.json());

const comments = [];

app.post('/comments', (req, res) => {
  const comment = req.body;
  comments.push(comment);
  res.json(comment);
});

app.get('/comments', (req, res) => {
  res.json(comments);
});

app.delete('/comments', (req, res) => {
  comments.length = 0;
  res.json(comments);
});

app.listen(3000, () => {
  console.log('Server is listening on port 3000');
});

// $ curl -X POST -H "Content-Type: application/json" -d '{"comment": "This is great!"}' http://localhost:3000/comments
// {"comment":"This is great!"}

// $ curl http://localhost:3000/comments
// [{"comment":"This is great!"}]

// $ curl -X DELETE http://localhost:3000/comments
// []

// $ curl http://localhost:3000/comments
// []

// $ curl -X POST -H "Content-Type: application/json" -d '{"comment": "This is great!"}' http://localhost:3000/comments
// {"comment":"This is great!"}

// $ curl -X POST -H "Content-Type: application/json" -d '{"comment": "This is also great!"}' http://localhost:3000/comments
// {"comment":"This is also great!"}

// $ curl http://localhost:3000/comments
// [{"comment":"This is great!"},{"comment":"This is also great!"}]

// $ curl -X DELETE http://localhost:3000/comments
// []

// $ curl http://localhost:3000/comments
// []