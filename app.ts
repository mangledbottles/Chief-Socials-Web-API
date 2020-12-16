const express = require('express');
const app = express();

/** All routes */
const authRoutes = require('./routes/AuthRoute.ts');
const UserRoute = require('./routes/UserRoute.ts');

app.use('/api/auth', AuthRoute)
app.use('/api/users', UserRoute);



app.listen(3000, () => {
    console.log(`Running on http://localhost:3000`)
  });