const Models = require('../models');

module.exports = [
  {
    method: 'POST',
    path: '/scores',
    handler: (request, reply) => {
      // console.log();
      const incomingObject = JSON.parse(request.payload);
      Models.users.upsert(incomingObject, {
        where: {
          username: incomingObject.username,
        },
      }).then(() => reply('Scores inserted'));
    },
  }];
