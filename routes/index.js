const router = require('express').Router();
const apiRoutes = require('./api');

// activate api router
router.use('/api', apiRoutes);

//notified if wrong route is used
router.use((req, res) => {
  return res.send('Wrong route!');
});

module.exports = router;

