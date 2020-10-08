/* eslint-disable func-names */
const mysql = require('mysql');

const connection = mysql.createConnection({
  host: 'localhost',
  user: 'root',
  password: '',
  database: 'service_one',
});

const findAll = function (callback) {
  connection.query('SELECT * FROM products INNER JOIN review ON products.product_id = review.product_id', (err, result) => {
    if (err) {
      callback(err, null);
    } else {
      callback(null, result);
    }
  });
};

const findReview = function (id, callback) {
  const queryStr = `SELECT * FROM products INNER JOIN review ON products.product_id = review.product_id AND products.product_id = ${id}`;

  connection.query(queryStr, (err, result) => {
    if (err) {
      callback(err, null);
    } else {
      callback(null, result);
    }
  });
};

const updateDb = function (data, dataTwo, callback) {
  const productsQuery = `INSERT INTO products(product_id, product_name, comfort_average, durability_average, size_average, stars_average) VALUES(${data.product_id}, '${data.product_name}', ${data.comfort_average}, ${data.durability_average}, ${data.size_average}, ${data.stars_average})`;
  const reviewQuery = `INSERT INTO review(product_id, username, comment, verified, locale, upvote, downvote, created_at, size_rating, durability_rating, comfort_rating, stars) VALUES(${dataTwo.product_id}, '${dataTwo.username}', '${dataTwo.comment}', ${dataTwo.verified}, '${dataTwo.locale}', ${dataTwo.upvote}, ${dataTwo.downvote}, '${dataTwo.created_at}', ${dataTwo.size_rating}, ${dataTwo.durability_rating}, ${dataTwo.comfort_rating}, ${dataTwo.stars})`;

  connection.query(productsQuery, (err, result) => {
    if (err) {
      callback(err, null);
    } else {
      callback(null, result);
    }
  });

  connection.query(reviewQuery, (err, result) => {
    if (err) {
      callback(err, null);
    } else {
      callback(null, result);
    }
  });
};

const clearDb = function (callback) {
  const clearReview = 'TRUNCATE TABLE review';
  const clearProducts = 'TRUNCATE TABLE products';

  connection.query(clearReview, (err, result) => {
    if (err) {
      callback(err, null);
    } else {
      callback(null, result);
    }
  });

  connection.query(clearProducts, (err, result) => {
    if (err) {
      callback(err, null);
    } else {
      callback(null, result);
    }
  });
};

module.exports = {
  updateDb,
  findAll,
  clearDb,
  findReview,
  connection,
};