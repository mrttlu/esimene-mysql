const { assert } = require('chai');
const authService = require('../api/services/authService');
const correctUser = {
  email: 'peep@peep.ee',
  password: 'peep'
}

const inCorrectUser = {
  email: 'nonexisting@email.ee',
  password: 'wrongPassword'
}

describe('Auth service', function() {
  describe('Login', function() {
    it('should return token', async function() {
      const token = await authService.login(correctUser.email, correctUser.password);
      assert.ok(token);
    });
    it('should return false because of wrong password', async function() {
      const token = await authService.login(correctUser.email, inCorrectUser.password);
      assert.isFalse(token);
    });
    it('should return false because of wrong email', async function() {
      const token = await authService.login(inCorrectUser.email, correctUser.password);
      assert.isFalse(token);
    });
  });
});