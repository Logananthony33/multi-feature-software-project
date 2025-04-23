const getUserProfile = require('../profile');

test('get user profile', () => {
  expect(getUserProfile(1)).toEqual({ id: 1, name: "John Doe" });
});
