import { pool } from "./index.js";
import { seedData } from "./seed-data.js";

export async function createUsersTable() {
  return await pool.query(
    `CREATE TABLE IF NOT EXISTS users (
      id INTEGER PRIMARY KEY GENERATED ALWAYS AS IDENTITY,
      username VARCHAR(30) NOT NULL
    );`
  );
}

export async function dropUsersTable() {
  return await pool.query("DROP TABLE IF EXISTS users;");
}

export async function populateUsersTable(data) {
  return await pool.query(
    `INSERT INTO users (
      username
    ) (
      SELECT username
      FROM json_populate_recordset(NULL::users, $1::JSON)
    )
    RETURNING *;`,
    [JSON.stringify(data)]
  );
}

export async function resetUsersTable(data = seedData) {
  await dropUsersTable();
  await createUsersTable();
  const response = await populateUsersTable(data);
  return response.rows;
}
