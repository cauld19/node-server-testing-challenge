const express = require('express');

const Users = require('../users/users-model')

const server = express();

server.use(express.json());

server.get("/", (req, res) => {
    res.status(200).json({ api: "up" });
  });

  server.get("/users", (req, res) => {
    Users.getAll()
      .then(users => {
        res.status(200).json(users);
      })
      .catch(error => {
        res.status(500).json(error);
      });
  });

  server.post('/users', (req, res) => {
    const newUser = req.body;
    
    console.log(req.body)
      Users.add(newUser)
        .then(user => {
          
          res.status(201).json(user)
        })
        .catch(err => {
          res.status(500).json(err.message);
        })
});
  
  module.exports = server;


