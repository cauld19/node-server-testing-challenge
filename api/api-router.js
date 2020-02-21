const router = require('express').Router();

const usersRouter = require('../users/users-router.js');

router.use('/users', usersRouter);

router.get('/', (req,res) => {
    console.log('working')
    res.json({api: 'working'})
});



module.exports = router;