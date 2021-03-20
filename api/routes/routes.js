const express = require('express');

const router = express.Router();
// Import controllers
const pingController = require('../controllers/pingController');
const usersController = require('../controllers/usersController');
const lecturersController = require('../controllers/lecturersController');
const subjectsController = require('../controllers/subjectsController');
const homeworksController = require('../controllers/homeworksController');
const authController = require('../controllers/authController');

const isLoggedIn = require('../middlewares/isLoggedIn');

// Routes
router
  .get('/api/ping', pingController.ping)
  .post('/api/login', authController.login)
  .post('/api/users', usersController.create)

  .use(isLoggedIn)

  .get('/api/users', usersController.read)
  .get('/api/users/:id', usersController.readById)
  .put('/api/users', usersController.update)
  .delete('/api/users', usersController.delete)

  .get('/api/lecturers', lecturersController.read)
  .get('/api/lecturers/:id', lecturersController.readById)
  .post('/api/lecturers', lecturersController.create)
  .put('/api/lecturers', lecturersController.update)
  .delete('/api/lecturers', lecturersController.delete)

  .get('/api/subjects', subjectsController.read)
  .get('/api/subjects/:id', subjectsController.readById)
  .post('/api/subjects', subjectsController.create)
  .put('/api/subjects', subjectsController.update)
  .delete('/api/subjects', subjectsController.delete)

  .get('/api/homeworks', homeworksController.read)
  .get('/api/homeworks/:id', homeworksController.readById)
  .post('/api/homeworks', homeworksController.create)
  .put('/api/homeworks', homeworksController.update)
  .delete('/api/homeworks', homeworksController.delete);

module.exports = router;
