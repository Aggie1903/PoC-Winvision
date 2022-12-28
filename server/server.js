// server.js API 

const express = require('express');
const app = express();
const fs = require('fs');
const cors = require('cors');

app.use(cors());
app.use(express.json());

app.post('/api/answers', (req, res) => {
  const answer = req.body.answer;
  fs.writeFileSync('answers.js', answer);
  res.send('Data written to answers.js');
});

const port = process.env.PORT || 3000;
app.listen(port, () => console.log(`Listening on port ${port}...`));
