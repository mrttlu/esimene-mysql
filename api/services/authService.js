const hashService = require('./hashService');
const usersService = require('./usersService');
const authService = {};

authService.login = async (email, password) => {
  const user = await usersService.readByEmail(email);
  if (user) {
    const match = await hashService.compare(password, user.password);
    return match;
  } else {
    return false;
  }
}

module.exports = authService;