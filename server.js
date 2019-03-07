// require('dotenv').config();
const express = require('express');
const app = express();
const morgan = require('morgan');
const PORT = process.env.PORT;
const solver = require('./solver');

app.use(morgan('short'));

app.use('/', (req, res) => {
  const query = req.query.q;
  let response = 'OK';

  if (query === 'Degree') {
    response = process.env.DEGREE;
  } else if (query === 'Email Address') {
    response = process.env.EMAIL;
  } else if (query === 'Status') {
    response = process.env.STATUS;
  } else if (query === 'Resume') {
    response = process.env.RESUME;
  } else if (query === 'Referrer') {
    response = process.env.REFERRER;
  } else if (query === 'Phone') {
    response = process.env.PHONE;
  } else if (query === 'Name') {
    response = process.env.NAME;
  } else if (query === 'Source') {
    response = process.env.SOURCE;
  } else if (query === 'Position') {
    response = process.env.POSITION;
  } else if (query === 'Years') {
    response = process.env.YEARS;
  } else if (query === 'Puzzle') {
    const q = req.query.d.split('\n');
    response = solver(q.slice(2, 6));
  }

  res.send(response);
});

app.listen(PORT, () => console.log(`Listening on port ${PORT}`));
