const { assert } = require('chai');
const subjectsService = require('../api/services/subjectsService');
const userId = 1;

describe('Subjects service', function() {
  describe('Read', function() {
    it('should return list of subjects', async function() {
      const subjects = await subjectsService.read(userId);
      assert.ok(subjects);
    });
  });
});