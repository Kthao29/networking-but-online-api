const express = require('express');
const db = require('./config/connection');
const routes = require('./routes');

const cwd = process.cwd();

// hosted on port 3001
const PORT = 3001;
const app = express();

// Note: not necessary for the Express server to function. This just helps indicate what activity's server is running in the terminal.
const activity = cwd.includes('01-Activities')
  ? cwd.split('01-Activities')[1]
  : cwd;

app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(routes);

// let you know when the serve is running
db.once('open', () => {
  app.listen(PORT, () => {
    console.log(`API server for ${activity} running on port ${PORT}!`);
  });
});
