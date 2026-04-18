const express = require('express');
const app = express();

app.use(express.json()); // middleware penting

app.get('/', (req, res) => {
  res.send('Helo Word Test');
});

app.listen(3000, () => {
  console.log('Server: http://localhost:3000');
});