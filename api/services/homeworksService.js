const db = require('../../db');
const homeworksService = {};

homeworksService.read = async (users_id) => {
  const sql = `SELECT h.id, h.name, h.description, h.dueDate, h.done, s.name AS subject, l.email AS lecturer
                FROM homeworks h
                  INNER JOIN subjects s ON h.subjects_id = s.id
                  INNER JOIN lecturers l ON s.lecturers_id = l.id
                WHERE h.users_id = ?`
  const homeworks = await db.query(sql, [users_id]);
  return homeworks;
}

homeworksService.readHomeworkToUpdate = async (id, users_id) => {
  const sql = `SELECT * FROM homeworks h WHERE h.id = ? AND h.users_id = ?`
  const homeworks = await db.query(sql, [id, users_id]);
  return homeworks[0];
}

homeworksService.readById = async (id, users_id) => {
  const sql = `SELECT h.id, h.name, h.description, h.dueDate, h.done, h.users_id, s.name AS subject, l.email AS lecturer
                FROM homeworks h
                  INNER JOIN subjects s ON h.subjects_id = s.id
                  INNER JOIN lecturers l ON s.lecturers_id = l.id
                WHERE h.id = ? AND h.users_id = ?`
  const subjects = await db.query(sql, [id, users_id]);
  if (subjects[0].users_id !== users_id) return false;
  return subjects[0];
}

homeworksService.create = async (homework) => {
  const result = await db.query(`INSERT INTO homeworks SET ?`, [homework]);
  if (result.affectedRows === 0) return false;
  return result.insertId;
}

homeworksService.update = async (homework) => {
  const homeworkToUpdate = await homeworksService.readHomeworkToUpdate(homework.id, homework.users_id);
  if (homework.name) homeworkToUpdate.name = homework.name;
  if (homework.description) homeworkToUpdate.description = homework.description;
  if (homework.subjects_id) homeworkToUpdate.subjects_id = homework.subjects_id;
  if (homework.dueDate) homeworkToUpdate.dueDate = homework.dueDate;
  if (homework.done || (homework.done === 0)) homeworkToUpdate.done = homework.done;
  const result = await db.query(`UPDATE homeworks SET ? WHERE id = ? AND users_id = ?`, [homeworkToUpdate, homework.id, homework.users_id]);
  if (result.affectedRows === 0) return false;
  return true;
}

homeworksService.delete = async (id, users_id) => {
  const result = await db.query(`DELETE FROM homeworks WHERE id = ? AND users_id = ?`, [id, users_id]);
  if (result.affectedRows === 0) return false;
  return true;
}

module.exports = homeworksService;