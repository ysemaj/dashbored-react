const express = require('express');
const createError = require('http-errors');
const router = express.Router();
const dotenv = require('dotenv');
const ENV = process.env.NODE_ENV || 'development';
dotenv.config();

router.use(function timeLog(req, res, next) {
  console.log('Time: ', Date.now());
  next();
});

router.get('/', (req, res) => {
  res.send('Home');
});

const data = require('./data/AppFooterLinksData.json');
router.get('/data', (req, res, next) => {
  res.send(data);
});

router.use((err, req, res, next) => {
  err.statusCode = err.statusCode || 500;
  err.status = err.status || 'error';
  res.status(err.statusCode).json({
    status: err.status,
    message: err.message,
  });
});

module.exports = router;
