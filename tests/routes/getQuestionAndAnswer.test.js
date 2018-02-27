const Server = require('../../server');

describe('Server test', () => {
  test('responds with a list, keys being author name', (done) => {
    const options = {
      method: 'GET',
      url: '/getQuestionsAndAnswers',
    };
    Server.inject(options, (response) => {
      expect(response.statusCode).toEqual(200);
      done();
    });
  });
});
