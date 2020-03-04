const express = require('express')
const app = express();
const userRouter = require('./routes/users.route')

app.use(userRouter);

module.exports = app;