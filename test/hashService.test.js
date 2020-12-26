const { assert } = require('chai')
const bcrypt = require('bcrypt');
const { saltRounds } = require('../config');
const hashService = require('../api/services/hashService');
const password = 'sigrimigri';
const wrongPassword = 'migrisigri';

describe('Hash Service', function() {
  describe('Hashing', function() {
    it('should return correct hash for password', async function() {
      const hash = await hashService.hash(password);
      const match = await bcrypt.compare(password, hash);
      assert.isTrue(match);
    });
    it('should fail matching with wrong password', async function() {
      const hash = await hashService.hash(password);
      const match = await bcrypt.compare(wrongPassword, hash);
      assert.isFalse(match);
    });
  });
  describe('Matching', function() {
    it('should return correct match for password', async function() {
      const hash = await bcrypt.hash(password, saltRounds);
      const match = await hashService.compare(password, hash);
      assert.isTrue(match);
    });
    it('should fail matching with wrong password', async function() {
      const hash = await bcrypt.hash(password, saltRounds);
      const match = await hashService.compare(wrongPassword, hash);
      assert.isFalse(match);
    });
  });
});