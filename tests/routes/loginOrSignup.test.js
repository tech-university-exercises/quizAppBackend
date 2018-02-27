const Server = require('../../server');

describe('Api for question and answer mapping test', () => {
  test('check the statusCode for the api', (done) => {
    const options = {
      method: 'POST',
      payload: {
        username: 'anmol5varma',
      },
      url: '/users',
    };
    Server.inject(options, (response) => {
      expect(response.statusCode).toEqual(200);
      done();
    });
  });
});
