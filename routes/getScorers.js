const Models = require('../models');

module.exports = [
  {
    method: 'GET',
    path: '/scores',
    handler: (request, reply) => {
      Models.users.findOne({
        where: {
          username: request.query.username,
        },
      }).then(response => reply({ score: response.score }));
    },
  }];
