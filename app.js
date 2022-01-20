const express = require('express');
const { rawListeners } = require('process');
const morgan = require('morgan');

const tourRouter = require('./routes/tourRoutes');
const userRouter = require('./routes/userRoutes');

const app = express();

// 1) middleware
app.use(morgan('dev'));
app.use(express.json());

app.use((req, res, next) => {
  console.log('Hello from the middleware 👋🏻');
  next();
});

// 3) routes
app.use('/api/v1/tours', tourRouter);
app.use('/api/v1/users', userRouter);

// 4) start server

const port = 3000;
app.listen(port, () => {
  console.log(`App running on port ${port}...`);
});
