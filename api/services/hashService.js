const bcrypt = require('bcrypt');
const saltRounds = 10;
const hashService = {};

hashService.hash = async (password) => {
  const hash = await bcrypt.hash(password, saltRounds);
  return hash;
}

module.exports = hashService;