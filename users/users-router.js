const router = require('express').Router();

const User = require('./users-model.js')

router.get('/', (req, res) => {
    
    User.find()
          .then(posts => {
              res.status(200).json(posts);
          })
          .catch(err => {
              res.status(500).json({ error: "The posts information could not be retrieved." });
          })
  });



router.post('/', (req, res) => {
    const newUser = req.body;
    
    console.log(req.body)
      User.add(newUser)
        .then(user => {
          
          res.status(201).json(user)
        })
        .catch(err => {
          res.status(500).json(err.message);
        })
});

  module.exports = router;