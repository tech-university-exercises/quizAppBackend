const Server = require('../../server');

describe('Api for question and answer mapping test', () => {
  test('check the statusCode for the api', (done) => {
    const options = {
      method: 'GET',
      url: '/getQuestionsAndAnswers',
    };
    Server.inject(options, (response) => {
      expect(response.statusCode).toEqual(200);
      done();
    });
  });
  test('Check whether the object in array has a property questionId', (done) => {
    const options = {
      method: 'GET',
      url: '/getQuestionsAndAnswers',
    };
    Server.inject(options, (response) => {
      expect(response.result.allQuestionsWithAnswer[0].hasOwnProperty('questionId')).toEqual(true);
      done();
    });
  });
  test('Check whether the object in array has a property answer', (done) => {
    const options = {
      method: 'GET',
      url: '/getQuestionsAndAnswers',
    };
    Server.inject(options, (response) => {
      expect(response.result.allQuestionsWithAnswer[0].hasOwnProperty('answer')).toEqual(true);
      done();
    });
  });
  test('Check for an invalid request', (done) => {
    const options = {
      method: 'POST',
      url: '/getQuestionsAndAnswers',
    };
    Server.inject(options, (response) => {
      expect(response.statusCode).toEqual(404);
      done();
    });
  });
});
