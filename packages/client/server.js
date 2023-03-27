const express = require('express');
const app = express();

app.get('/api/myCustomEndpoint', (req, res) => {
  res.send({
    message: 'This is a custom API endpoint!'
  });
});

module.exports = app;