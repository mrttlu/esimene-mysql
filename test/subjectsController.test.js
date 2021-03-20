/* eslint-disable no-undef */
const { assert } = require('chai');
const request = require('supertest');
const app = require('../app');
const authService = require('../api/services/authService');

const user = {
  email: 'peep@peep.ee',
  password: 'peep',
};

const newSubject = {
  name: 'New subject',
  lecturerId: 1,
};

let subjectId;
let token;
const lecturerId = 1;

before(async () => {
  token = await authService.login(user.email, user.password);
});

describe('GET /api/subjects', () => {
  it('responds with success: false and message', async () => {
    const res = await request(app)
      .get('/api/subjects');
    assert.equal(res.statusCode, 401);
    assert.isFalse(res.body.success);
  });
  it('responds with success: true and list of subjects', async () => {
    const res = await request(app)
      .get('/api/subjects')
      .set('Authorization', `Bearer ${token}`);
    assert.equal(res.statusCode, 200);
    assert.isTrue(res.body.success);
    assert.ok(res.body.subjects);
  });
});

describe('POST /api/subjects/', () => {
  it('creates new subject and responds with success: true and subjectId', async () => {
    const res = await request(app)
      .post('/api/subjects')
      .send(newSubject)
      .set('Authorization', `Bearer ${token}`);
    assert.equal(res.statusCode, 201);
    assert.isTrue(res.body.success);
    assert.ok(res.body.id);
    subjectId = res.body.id;
  });
  it('responds with success: false because of missing name', async () => {
    const res = await request(app)
      .post('/api/subjects')
      .send({ lecturerId: 'asssass' })
      .set('Authorization', `Bearer ${token}`);
    assert.equal(res.statusCode, 400);
    assert.isFalse(res.body.success);
    assert.equal(res.body.message, 'Required field(s) missing or invalid');
  });
  it('responds with success: false because of missing lecturerId', async () => {
    const res = await request(app)
      .post('/api/subjects')
      .send({ name: 'asssass' })
      .set('Authorization', `Bearer ${token}`);
    assert.equal(res.statusCode, 400);
    assert.isFalse(res.body.success);
    assert.equal(res.body.message, 'Required field(s) missing or invalid');
  });
});

describe('PUT /api/subjects/', () => {
  it('updates subjects name and responds with success: true', async () => {
    const res = await request(app)
      .put('/api/subjects')
      .send({
        id: subjectId,
        name: 'Updated Subject',
      })
      .set('Authorization', `Bearer ${token}`);
    assert.equal(res.statusCode, 200);
    assert.isTrue(res.body.success);
  });
  it('updates subjects lecturer and responds with success: true', async () => {
    const res = await request(app)
      .put('/api/subjects')
      .send({
        id: subjectId,
        lecturerId,
      })
      .set('Authorization', `Bearer ${token}`);
    assert.equal(res.statusCode, 200);
    assert.isTrue(res.body.success);
  });
  it('responds with success: false because of missing id', async () => {
    const res = await request(app)
      .put('/api/subjects')
      .send({
        lecturerId: 'Updated Subject',
      })
      .set('Authorization', `Bearer ${token}`);
    assert.equal(res.statusCode, 400);
    assert.isFalse(res.body.success);
  });
  it('responds with success: false because of nonexisting subject', async () => {
    const res = await request(app)
      .put('/api/subjects')
      .send({
        id: 9817398273498273,
      })
      .set('Authorization', `Bearer ${token}`);
    assert.equal(res.statusCode, 400);
    assert.isFalse(res.body.success);
    assert.equal(res.body.message, 'Subject does not exists.');
  });
  it('responds with success: false because of missing id', async () => {
    const res = await request(app)
      .put('/api/subjects')
      .send({
        lecturerId: 'Updated Subject',
      })
      .set('Authorization', `Bearer ${token}`);
    assert.equal(res.statusCode, 400);
    assert.isFalse(res.body.success);
  });
});

describe('GET /api/subjects/:id', () => {
  it('responds with success: true and subject', async () => {
    const res = await request(app)
      .get(`/api/subjects/${subjectId}`)
      .set('Authorization', `Bearer ${token}`);
    assert.equal(res.statusCode, 200);
    assert.isTrue(res.body.success);
    assert.ok(res.body.subject);
  });
  it('responds with success: false because of nonexisting subject', async () => {
    const res = await request(app)
      .get('/api/subjects/asasasa')
      .set('Authorization', `Bearer ${token}`);
    assert.equal(res.statusCode, 400);
    assert.isFalse(res.body.success);
  });
});

describe('DELETE /api/subjects/', () => {
  it('deletes created subject and responds with success: true', async () => {
    const res = await request(app)
      .delete('/api/subjects')
      .send({ id: subjectId })
      .set('Authorization', `Bearer ${token}`);
    assert.equal(res.statusCode, 200);
    assert.isTrue(res.body.success);
  });
  it('responds with success: false because of nonexisting subject', async () => {
    const nonexistingSubject = { id: 9090909 };
    const res = await request(app)
      .delete('/api/subjects')
      .send(nonexistingSubject)
      .set('Authorization', `Bearer ${token}`);
    assert.equal(res.statusCode, 400);
    assert.isFalse(res.body.success);
    assert.equal(res.body.message, 'No subject found.');
  });
  it('responds with success: false because of missing id', async () => {
    const res = await request(app)
      .delete('/api/subjects')
      .set('Authorization', `Bearer ${token}`);
    assert.equal(res.statusCode, 400);
    assert.isFalse(res.body.success);
    assert.equal(res.body.message, 'Required field(s) missing or invalid');
  });
});
