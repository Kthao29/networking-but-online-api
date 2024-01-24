const router = require('express').Router();

// connect thoughtRoutes
const thoughtRoutes = require('./thoughtRoutes');

//connect userRoutes
const userRoutes = require('./userRoutes');

// connect router to /thoughts 
router.use('/thought', thoughtRoutes);

// connect router to /users
router.use('/users', userRoutes);

//export it out
module.exports = router;
