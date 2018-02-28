const Server = require('../../server');
const Models = require('../../models');

describe('Api for question and answer mapping test', () => {
  afterEach((done) => {
    Models.users.destroy({
      where: { username: 'anmolvarma' },
      truncate: true,
    }).then(() => {
      done();
    }).catch();
  });
  test('check the statusCode for the api', (done) => {
    const options = {
      method: 'POST',
      body: JSON.stringify({
        username: 'anmolvarma',
      }),
      url: '/users',
    };
    Server.inject(options, (response) => {
      expect(response.statusCode).toEqual(200);
      done();
    });
  });
  test('check the statusCode for the api', (done) => {
    const options = {
      method: 'POST',
      body: JSON.stringify({
        username: 'anmolvarma',
      }),
      url: '/users',
    };
    Server.inject(options, (response) => {
      expect(response.result.message).toEqual('New user comes');
      done();
    });
  });
});
