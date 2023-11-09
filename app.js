const express = require('express');
const app = express();
const port = 3000;

app.get('/', (req, res) => {
  res.send('Hello, this is a sample Node.js web app for k'8!');
});

app.listen(port, () => {
  console.log(`Server is running at http://localhost:${port}`);
});
