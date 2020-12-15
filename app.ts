const express = require('express');
const app = express();

/** All routes */
const UserRoute = require('./routes/UserRoute.ts');

app.use('/users', UserRoute);


app.listen(3000, () => {
    console.log(`Running on http://localhost:3000`)
  });