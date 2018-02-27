const Models = require('../models');
const getAnswers = require('../helper/mapAnswerAndQuestions');

module.exports = [
  {
    method: 'GET',
    path: '/getQuestion',
    handler: (request, reply) => {
      Models.question_bank.findAll().then((questionsInDB) => {
        let insertArrayCopy;
        if (questionsInDB.length === 0) {
          return getAnswers()
            .then(questionList => questionList.allQuestionsWithAnswer.map((eachEntry) => {
              const questionObject = {};
              // TO DO take only startsWith options
              const {
                questionId, question, answer, ...optionsString
              } = eachEntry;
              questionObject.question = question;
              questionObject.questionId = questionId;
              questionObject.correct = answer;
              questionObject.options = optionsString;
              return questionObject;
            })).then((insertArray) => {
              insertArrayCopy = insertArray;
              return Models.question_bank.bulkCreate(insertArray);
            }).then(() => reply(insertArrayCopy))
            .catch(err => reply({ statusCode: 500, message: 'Server not responding', error: err.message }));
        }
        const questionListObject = questionsInDB.map((eachEntry) => {
          const questionObject = {};
          questionObject.question = eachEntry.question;
          questionObject.questionId = eachEntry.questionId;
          questionObject.options = eachEntry.options;
          questionObject.correct = eachEntry.correct;
          return questionObject;
        });
        return reply(questionListObject);
      }).catch(err => reply({ statusCode: 500, message: 'Server not responding', error: err.message }));
    },
  }];
