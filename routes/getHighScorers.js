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
        const scoreList = response.filter((eachEntry) => {
          const { score } = eachEntry;
          if (score) { return true; }
          return false;
        });
        reply(scoreList.reverse().map((eachEntry) => {
          const { score, username } = eachEntry;
          return ({ score, username });
        }).slice(0, 5));
      });
    },
  }];
