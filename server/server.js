const express = require('express');
const cors = require('cors');
const helmet = require('helmet');
const bodyParser = require('body-parser');
const cookieParser = require('cookie-parser');
const morgan = require('morgan');
const dotenv = require('dotenv');
const router = require('./router');

const PORT = process.env.PORT || 9000;
const ENV = process.env.NODE_ENV || 'development';
dotenv.config();

const app = express();
app.use(morgan('dev'));
app.use(helmet());
app.use(cors());
app.use(bodyParser.json());
app.use(cookieParser());
app.use(express.json());
app.use(
  express.urlencoded({
    extended: false,
  })
);

app.listen(PORT, () => {
  console.log(`Server running in ${ENV} on port ${PORT}`);
});

app.use('/', router);

module.exports = app;
