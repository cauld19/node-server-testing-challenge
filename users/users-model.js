const db = require('../database/dbConfig.js');

module.exports = {
    add,
    find,
    remove,
    findById,
};

  function find() {
    return db('users')
  }


  function findById(id) {
    return db('users')
      .where({ id })
      .first();
  }

 
function add(user) {
    return db('users')
        .insert(user)
        .then(ids => {
            return findById(ids[0]);
          });
}

function remove(id) {
    return db('users')
        .where('id', id)
        .del();
}