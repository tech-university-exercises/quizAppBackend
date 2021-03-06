const rp = require('request-promise');

const getAnswers = () => {
  const getAllQuestionUrl = 'https://5gj1qvkc5h.execute-api.us-east-1.amazonaws.com/dev/allQuestions';
  const getAnswerByQuestionId = 'https://5gj1qvkc5h.execute-api.us-east-1.amazonaws.com/dev/findAnswerById/';
  let allQuestion;
  return rp.get(getAllQuestionUrl)
    .then((result) => {
      const list = JSON.parse(result);
      allQuestion = list.allQuestions;
      return list.allQuestions.map(eachQuestion => rp.get(`${getAnswerByQuestionId}${eachQuestion.questionId}`));
    })
    .then(list => Promise.all(list))
    .then(answerList => allQuestion.map((entry, index) => {
      const newEntry = entry;
      newEntry.answer = JSON.parse(answerList[index]).answer;
      return newEntry;
    }))
    .then(result => ({ allQuestionsWithAnswer: result }))
    .catch((error) => {
      console.log(error.message);
      return { statusCode: 500, message: 'Error in external api' };
    });
};

module.exports = getAnswers;
