const getAnswers = require('../helper/mapAnswerAndQuestions');

module.exports = [
  {
    method: 'GET',
    path: '/getQuestionsAndAnswers',
    handler: (request, reply) => {
      getAnswers().then(result => reply(result));
    },
  }];
