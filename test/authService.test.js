/* eslint-disable no-undef */
const { assert } = require('chai');
const authService = require('../api/services/authService');
const create = require('../api/helpers/createAndSeedTables');

const correctUser = {
  email: 'peep@peep.ee',
  password: 'peep',
};

const inCorrectUser = {
  email: 'nonexisting@email.ee',
  password: 'wrongPassword',
};

before(async () => {
  await create();
});

describe('Auth service', () => {
  describe('Login', () => {
    it('should return token', async () => {
      const token = await authService.login(correctUser.email, correctUser.password);
      assert.ok(token);
    });
    it('should return false because of wrong password', async () => {
      const token = await authService.login(correctUser.email, inCorrectUser.password);
      assert.isFalse(token);
    });
    it('should return false because of wrong email', async () => {
      const token = await authService.login(inCorrectUser.email, correctUser.password);
      assert.isFalse(token);
    });
  });
});
