/* eslint-disable no-restricted-syntax */
const fs = require('fs');
const path = require('path');
const db = require('../../db');

const env = process.env.NODE_ENV;
const config = require('../../config');

const queriesPath = path.join(__dirname, `../docs/${env}.sql`);
const queries = fs.readFileSync(queriesPath).toString().split(';');
queries.pop();

const checkIfdataExistsInDatabase = async () => {
  try {
    const users = await db.query(`SELECT * FROM ${config.db.database}.users`);
    if (users.length < 1) {
      return false;
    }
    return true;
  } catch (error) {
    return false;
  }
};

const createTables = async () => {
  for await (const query of queries) {
    try {
      console.log(query);
      await db.query(`${query}`);
    } catch (error) {
      console.error(`Create error: ${error}`);
    }
  }
};

const create = async () => {
  const dataExists = await checkIfdataExistsInDatabase();
  if (!dataExists) {
    await createTables();
  }
};

module.exports = create;
