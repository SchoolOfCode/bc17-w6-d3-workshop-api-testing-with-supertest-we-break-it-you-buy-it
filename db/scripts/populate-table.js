import { populateUsersTable } from "../helpers.js";
import { seedData } from "../seed-data.js";
import { pool } from "../index.js";

try {
  await populateUsersTable(seedData);
  console.log("Populated 'users' table");
} catch (err) {
  console.error(err);
} finally {
  await pool.end();
}
