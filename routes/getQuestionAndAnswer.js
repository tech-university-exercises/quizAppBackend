const rp = require('request-promise');

module.exports = [
  {
    method: 'GET',
    path: '/getQuestionsAndAnswers',
    handler: (request, reply) => {
      const getAllQuestionUrl = 'https://5gj1qvkc5h.execute-api.us-east-1.amazonaws.com/dev/allQuestions';
      const getAnswerByQuestionId = 'https://5gj1qvkc5h.execute-api.us-east-1.amazonaws.com/dev/findAnswerById/';
      let allQuestions;
      rp.get(getAllQuestionUrl)
        .then((result) => {
          const list = JSON.parse(result);
          allQuestions = list.allQuestions;
          return list.allQuestions.map(eachQuestion => rp.get(`${getAnswerByQuestionId}${eachQuestion.questionId}`));
        })
        .then(list => Promise.all(list))
        .then(answerList => allQuestions.map((entry, index) => {
          const newEntry = entry;
          newEntry.answer = JSON.parse(answerList[index]).answer;
          return newEntry;
        }))
        .then(result => reply({ allQuestionsWithAnswer: result }))
        .catch((error) => {
          console.log(error.message);
          return reply({ statusCode: 500, message: 'Error in external api' });
        });
    },
  }];
