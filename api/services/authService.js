const jwt = require('jsonwebtoken');
const hashService = require('./hashService');
const usersService = require('./usersService');
const config = require('../../config');

const authService = {};

authService.login = async (email, password) => {
  const user = await usersService.readByEmail(email);
  if (user) {
    const match = await hashService.compare(password, user.password);
    if (match) {
      // Generate token
      const token = jwt.sign({ id: user.id }, config.jwtSecret, { expiresIn: 60 * 60 * 24 });
      return token;
    }
    return false;
  }
  return false;
};

module.exports = authService;
