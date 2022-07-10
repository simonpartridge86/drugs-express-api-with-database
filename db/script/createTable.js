import { pool } from "../index.js";

await pool.query(
  `CREATE TABLE IF NOT EXISTS drugs (
    id INT PRIMARY KEY GENERATED ALWAYS AS IDENTITY,
    drug_name TEXT,
    brand_name TEXT,
    cat_number BIGINT,
    company TEXT,
    dose_cost MONEY
 );`,
  (err, res) => {
    console.log(err, res.rows);
  }
);
