import { resetUsersTable } from "../helpers.js";
import { pool } from "../index.js";
import { seedData } from "../seed-data.js";

try {
  const insertedRows = await resetUsersTable(seedData);
  console.log("Dropped, re-created and re-seeded 'users' table");
  console.log(insertedRows);
} catch (err) {
  console.error(err);
} finally {
  await pool.end();
}
