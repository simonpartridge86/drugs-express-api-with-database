import { pool } from "../index.js";

await pool.query(`DROP TABLE IF EXISTS drugs;`);