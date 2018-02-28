const Models = require('../models');

module.exports = [
  {
    method: 'GET',
    path: '/highScore',
    handler: (request, reply) => {
      Models.users.findAll({
        order: ['score'],
      }).then((response) => {
        console.log(JSON.stringify(response));
        const scoreList = response.map((eachEntry) => {
          const { score, username } = eachEntry;
          return { score, username };
        });
        reply(scoreList);
      });
    },
  }];
