const Server = require('../../server');
const Models = require('../../models');

describe('Api for question and answer mapping test', () => {
  beforeEach((done) => {
    Models.question_bank.create({
      question: 'What is the capital of India',
      questionId: 12,
      options: {
        option1: 'New Delhi',
        option2: 'MP',
        option3: 'UP',
        option4: 'Bangalore',
      },
      correct: 'New Delhi',
    }).then(() => {
      done();
    }).catch();
  });

  afterEach((done) => {
    Models.question_bank.destroy({
      where: { questionId: 12 },
      truncate: true,
    }).then(() => {
      done();
    }).catch();
  });

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
      url: '/getQuestion',
    };
    Server.inject(options, (response) => {
      expect(response.result[0].hasOwnProperty('questionId')).toEqual(true);
      done();
    });
  });
  test('Should have question', (done) => {
    const options = {
      method: 'GET',
      url: '/getQuestion',
    };
    Server.inject(options, (response) => {
      expect(response.result[0].hasOwnProperty('question')).toEqual(true);
      done();
    });
  });
  test('Should have question', (done) => {
    const options = {
      method: 'GET',
      url: '/getQuestion',
    };
    Server.inject(options, (response) => {
      expect(response.result[0].hasOwnProperty('options')).toEqual(true);
      done();
    });
  });
});
