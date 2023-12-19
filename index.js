const express = require('express');
const bodyParser = require('body-parser');

const app = express();
const PORT = 3000;

app.use(bodyParser.json());

app.post('/receive-json', (req, res) => {
  const receivedData = req.body;
  console.log('Received JSON data:', receivedData);

  res.status(200).json({ message: 'Data received successfully' });
});

app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
