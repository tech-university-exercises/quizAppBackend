const Server = require('../../server');
const Models = require('../../models');

describe('Api for question and answer mapping test', () => {
  beforeEach((done) => {
    Models.users.create({
      username: 'anmolvarma',
      score: 23,
      createdAt: new Date(),
      updatedAt: new Date(),
    }).then(() => {
      done();
    }).catch();
  });

  afterEach((done) => {
    Models.users.destroy({
      where: { userid: 'anmolvarma' },
      truncate: true,
    }).then(() => {
      done();
    }).catch();
  });
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
