const express = require('express');

const app = express();

app.use(express.json());

app.get('/', (req, res) => {
  res.json({ message: 'Application Framework Lab 04', status: 'running' });
});

app.get('/health', (req, res) => {
  res.json({ status: 'healthy' });
});

app.post('/echo', (req, res) => {
  res.json({ echo: req.body });
});

module.exports = app;
