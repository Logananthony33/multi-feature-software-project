const login = require('../login');

test('valid login', () => {
  expect(login('admin', 'pass1234')).toBe(true);
});
