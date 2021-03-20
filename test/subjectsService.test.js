/* eslint-disable no-undef */
const { assert } = require('chai');
const subjectsService = require('../api/services/subjectsService');

const userId = 1;

describe('Subjects service', () => {
  describe('Read', () => {
    it('should return list of subjects', async () => {
      const subjects = await subjectsService.read(userId);
      assert.ok(subjects);
    });
  });
});
