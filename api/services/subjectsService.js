const db = require('../../db');
const subjectsService = {};

subjectsService.read = async (users_id) => {
  if (!users_id) return false;
  const subjects = await db.query(`SELECT s.id, s.name, l.firstName, l.lastName, l.email FROM subjects s INNER JOIN lecturers l ON s.lecturers_id = l.id WHERE s.users_id = ?`, [users_id]);
  return subjects;
}

subjectsService.readById = async (id, users_id) => {
  const subjects = await db.query(`SELECT s.id, s.name, s.users_id, l.firstName, l.lastName, l.email FROM subjects s INNER JOIN lecturers l ON s.lecturers_id = l.id WHERE s.id = ? AND s.users_id = ?`, [id, users_id]);
  if (subjects.length < 1 || subjects[0].users_id !== users_id) return false;
  return subjects[0];
}

subjectsService.create = async (subject) => {
  if(!subject) return false;
  const result = await db.query(`INSERT INTO subjects SET ?`, [subject]);
  if (result.affectedRows === 0) return false;
  return result.insertId;
}

subjectsService.update = async (subject) => {
  const subjectToUpdate = await subjectsService.readById(subject.id, subject.users_id);
  if (!subjectToUpdate) return false;
  if (subject.name) subjectToUpdate.name = subject.name;
  if (subject.lecturers_id) subjectToUpdate.lecturers_id = subject.lecturers_id;
  // Remove fields not related to subject (readById gives subject with lecturers data)
  delete subjectToUpdate.firstName;
  delete subjectToUpdate.lastName;
  delete subjectToUpdate.email;
  const result = await db.query(`UPDATE subjects SET ? WHERE id = ? AND users_id = ?`, [subjectToUpdate, subject.id, subject.users_id]);
  if (result.affectedRows === 0) return false;
  return true;
}

subjectsService.delete = async (id, users_id) => {
  const result = await db.query(`DELETE FROM subjects WHERE id = ? AND users_id = ?`, [id, users_id]);
  if (result.affectedRows === 0) return false;
  return true;
}

module.exports = subjectsService;