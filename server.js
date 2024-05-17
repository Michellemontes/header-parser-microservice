const express = require('express');
const cors = require('cors');
const app = express();

app.use(cors());
app.use(express.static('public'));

app.get('/api/whoami', (req, res) => {
  const ipaddress = req.headers['x-forwarded-for'] || req.socket.remoteAddress;
  const language = req.headers['accept-language'];
  const software = req.headers['user-agent'];

  res.json({
    ipaddress: ipaddress,
    language: language,
    software: software
  });
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
