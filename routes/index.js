const router = require('express').Router(); 

const apiRoutes = require('./api'); 

// prefix routes from api directory
router.use('/api', apiRoutes); 

module.exports = router; 