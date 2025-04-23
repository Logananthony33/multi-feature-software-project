const login = require('../login');

test('valid login', () => {
  expect(login('admin', '1234')).toBe(true);
});
