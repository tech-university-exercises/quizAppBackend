const Server = require('../../server');

describe('Api for question and answer mapping test', () => {
  test('check the statusCode for the api', (done) => {
    const options = {
      method: 'GET',
      url: '/highScore',
    };
    Server.inject(options, (response) => {
      expect(response.statusCode).toEqual(200);
      done();
    });
  });
  test('Should have questionId', (done) => {
    const options = {
      method: 'GET',
      url: '/highScore',
    };
    Server.inject(options, (response) => {
      expect(response.result[0].hasOwnProperty('score')).toEqual(true);
      done();
    });
  });
  test('Should have question', (done) => {
    const options = {
      method: 'GET',
      url: '/highScore',
    };
    Server.inject(options, (response) => {
      expect(response.result[0].hasOwnProperty('username')).toEqual(true);
      done();
    });
  });
});
