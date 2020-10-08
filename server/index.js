/* eslint-disable no-console */
const express = require('express');

const { findReview } = require('../database-mysql/index');

const app = express();

app.use(express.static(`${__dirname}/../react-client/dist`));

app.get('/api/reviews/:productID', (req, res) => {
  const query = req.params.productID;
  console.log(query);

  findReview(query, (err, result) => {
    if (err) {
      throw (err);
    } else {
      res.send(result);
    }
  });
});

app.listen(3003, () => {
  console.log('listening on port 3003!');
});