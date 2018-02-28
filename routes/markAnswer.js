const Models = require('../models');

module.exports = [
  {
    method: 'POST',
    path: '/question',
    handler: (request, reply) => {
      console.log(typeof request.payload, request.payload);
      const newOptionsMarked = JSON.parse(request.payload);
      let optionsMarkedTillNow;
      console.log(newOptionsMarked, '**');
      Models.users.findOne({
        where: {
          username: newOptionsMarked.username,
        },
      }).then((response) => {
        optionsMarkedTillNow = response.optionsMarked;
        if (optionsMarkedTillNow === null) { optionsMarkedTillNow = {}; }
        optionsMarkedTillNow[newOptionsMarked.questionId] = newOptionsMarked.option;
        return Models.users.update({
          optionsMarked: optionsMarkedTillNow,
        }, {
          where: {
            username: newOptionsMarked.username,
          },
        });
      }).then(() => reply(optionsMarkedTillNow)).catch(err => reply(err.message));
    },
  }];
