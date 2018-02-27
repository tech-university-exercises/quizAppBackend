const Models = require('../models');

module.exports = [
  {
    method: 'POST',
    path: '/question',
    handler: (request, reply) => {
      const newOptionsMarked = request.payload.optionsMarked;
      Models.users.update({
        optionsMarked: newOptionsMarked,
      }, {
        where: {
          username: request.payload.username,
        },
      }).then(() => reply({ statusCode: 200, message: 'Option marked' })).catch(err => reply({ statusCode: 500, message: err.message }));
    },
  }];
