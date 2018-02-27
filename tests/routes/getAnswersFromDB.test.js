const Server = require('../../server');

describe('Api for question and answer mapping test', () => {
  test('check the statusCode for the api', (done) => {
    const options = {
      method: 'GET',
      url: '/getQuestion',
    };
    Server.inject(options, (response) => {
      expect(response.statusCode).toEqual(200);
      done();
    });
  });
  test('Should have questionId', (done) => {
    const options = {
      method: 'GET',
      url: '/getQuestionsAndAnswers',
    };
    Server.inject(options, (response) => {
      expect(response.result.allQuestionsWithAnswer[0].hasOwnProperty('questionId')).toEqual(true);
      done();
    });
  });
  test('Should have question', (done) => {
    const options = {
      method: 'GET',
      url: '/getQuestionsAndAnswers',
    };
    Server.inject(options, (response) => {
      expect(response.result.allQuestionsWithAnswer[0].hasOwnProperty('question')).toEqual(true);
      done();
    });
  });
});
