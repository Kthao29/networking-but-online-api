const { connect, connection } = require('mongoose');

// connect to mongodb
connect('mongodb://127.0.0.1:27017/developersApplications');

module.exports = connection;
