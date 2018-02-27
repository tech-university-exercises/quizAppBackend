const testFunction = require('./getArrayFromString.test');

describe('testing whether the function returns an array for string', () => {
  test('the function should return a array', (done) => {
    const input = 'option1;:*:;option2;:*:;option3';
    expect(testFunction(input)[0]).toBe('option1');
    done();
  });
});
