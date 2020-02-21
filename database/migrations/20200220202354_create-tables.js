
exports.up = function(knex) {
    return knex.schema
      .createTable('users', function(users) {
        users.increments();
        users
          .string('name')
          .notNullable()
          .unique();
      })
  };
  
  exports.down = function(knex) {
    return knex.schema.dropTableIfExists('users');
  };
  
