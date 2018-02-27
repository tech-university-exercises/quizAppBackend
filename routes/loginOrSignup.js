const Models = require('../models');

module.exports = [
  {
    method: 'POST',
    path: '/users',
    handler: (request, reply) => {
      Models.users.findOrCreate({ where: { username: request.payload.username } })
        .spread((queryResult, isCreated) => {
          if (!isCreated) {
            return reply({
              statusCode: 201, message: 'Old user returning', username: queryResult.username, markedOptions: queryResult.optionsMarked, mm: queryResult.maxMarks, score: queryResult.score,
            });
          }
          return reply({
            statusCode: 200, message: 'New user comes',
          });
        });
    },
  }];
