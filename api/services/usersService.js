const hashService = require('./hashService');
const db = require('../../db');

const usersService = {};

// Return list of users
usersService.read = async () => {
  try {
    const users = await db.query('SELECT id, firstName, lastName, email FROM users');
    return users;
  } catch (error) {
    return error.message;
  }
};

usersService.readByEmail = async (email) => {
  if (!email) return false;
  const users = await db.query('SELECT * FROM users WHERE email = ?', [email]);
  if (users.length < 1) return false;
  return users[0];
};

// Return user by id
usersService.readById = async (id) => {
  if (!id) return false;
  const users = await db.query('SELECT id, firstName, lastName, email FROM users WHERE id = ?', [id]);
  if (users.length < 1) return false;
  return users[0];
};

// Create user
usersService.create = async (user) => {
  const newUser = { ...user };
  newUser.password = await hashService.hash(user.password);
  // Add user to 'database'
  const result = await db.query('INSERT INTO users SET ?', [newUser]);
  if (result.affectedRows === 0) {
    return false;
  }
  return result.insertId;
};

usersService.update = async (user) => {
  const userToUpdate = usersService.readById(user.id);
  // Check if optional data exists
  if (user.firstName) {
    // Change user data in 'database'
    userToUpdate.firstName = user.firstName;
  }
  // Check if optional data exists
  if (user.lastName) {
    // Change user data in 'database'
    userToUpdate.lastName = user.lastName;
  }
  // Check if optional data exists
  if (user.email) {
    // Change user data in 'database'
    userToUpdate.email = user.email;
  }
  // Check if optional data exists
  if (user.password) {
    // Change user data in 'database'
    userToUpdate.password = hashService.hash(user.password);
  }

  const result = await db.query('UPDATE users SET ? WHERE id = ?', [userToUpdate, user.id]);
  if (result.affectedRows === 0) {
    return false;
  }
  return true;
};

usersService.delete = async (id) => {
  const result = await db.query('DELETE FROM users WHERE id = ?', [id]);
  if (result.affectedRows === 0) {
    return false;
  }
  return true;
};

module.exports = usersService;
