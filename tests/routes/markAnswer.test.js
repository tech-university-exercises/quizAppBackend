const Server = require('../../server');
const Models = require('../../models');

describe('Api for marking options in test', () => {
  beforeEach((done) => {
    Models.users.create({
      username: 'anmolvarma',
      createdAt: new Date(),
      updatedAt: new Date(),
    }).then(() => {
      done();
    }).catch();
  });

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
      payload: JSON.stringify({
        username: 'anmolvarma', questionId: 12, option: 'Hello',
      }),
      url: '/question',
    };
    Server.inject(options, (response) => {
      expect(response.result.statusCode).toEqual(200);
      done();
    });
  });
});
