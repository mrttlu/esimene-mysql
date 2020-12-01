const db = require('../../db');

const lecturersService = {
  read: async (userId) => {
    const lecturers = await db.query(`SELECT id, firstName, lastName, email FROM lecturers WHERE users_id = ?`, [userId]);
    return lecturers;
  },
  readById: (id) => {
    return lecturers[id];
  },
  create: (lecturer) => {
    lecturer.id = lecturers.length,
    // Add lecturer to 'database'
    lecturers.push(lecturer);

    const lecturerToReturn = { ... lecturer };
    delete password;

    return lecturerToReturn;
  },
  update: () => {

  },
  delete: (id) => {
    lecturers.splice(id, 1);
    return true;
  }
};

module.exports = lecturersService;