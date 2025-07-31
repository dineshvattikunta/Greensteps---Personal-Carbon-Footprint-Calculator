// api-example.js

const express = require('express');
const app = express();
const PORT = 3000;

const mockData = require('./mock_db.json');

app.get('/api/footprints', (req, res) => {
  res.json(mockData);
});

app.listen(PORT, () => {
  console.log(`Mock API running at http://localhost:${PORT}`);
});
