/* eslint-disable camelcase */
const db = require('../../db');

const lecturersService = {
  read: async (id) => {
    const lecturers = await db.query('SELECT * FROM lecturers WHERE users_id = ?', [id]);
    return lecturers;
  },
  readById: async (id, users_id) => {
    const lecturers = await db.query('SELECT * FROM lecturers WHERE id = ?', [id]);
    if (lecturers[0].users_id !== users_id) return false;
    return lecturers[0];
  },
  create: async (lecturer) => {
    const result = await db.query('INSERT INTO lecturers SET ?', [lecturer]);
    if (result.affectedRows === 0) return false;
    return result.insertId;
  },
  update: async (lecturer) => {
    const lecturerToUpdate = lecturersService.readById(lecturer.id, lecturer.users_id);
    if (lecturer.firstName) lecturerToUpdate.firstName = lecturer.firstName;
    if (lecturer.lastName) lecturerToUpdate.lastName = lecturer.lastName;
    if (lecturer.email) lecturerToUpdate.email = lecturer.email;

    const result = await db.query('UPDATE lecturers SET ? WHERE id = ?', [lecturerToUpdate, lecturer.id]);
    if (result.affectedRows === 0) return false;
    return true;
  },
  delete: async (id, userId) => {
    const result = await db.query('DELETE FROM lecturers WHERE id = ? AND users_id = ?', [id, userId]);
    if (result.affectedRows === 0) return false;
    return true;
  },
};

module.exports = lecturersService;
