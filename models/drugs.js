import { pool } from "../db/index.js";

//GET function
export async function getAllDrugs() {
  let result = await pool.query(`SELECT * FROM drugs;`);
  let responseObject = {
    success: true,
    message: "All of the drugs, enjoy",
    payload: result.rows,
  };
  return responseObject;
}

//POST function
export async function addDrug(input) {
  let result = await pool.query(
    `INSERT INTO drugs
  (drug_name, brand_name, cat_number, company, dose_cost)
  VALUES ($1, $2, $3, $4, $5) RETURNING *;`,
    [
      input.drug_name,
      input.brand_name,
      input.cat_number,
      input.company,
      input.dose_cost,
    ]
  );
  let responseObject = {
    success: true,
    message: "You've added a drug, cool dude!",
    payload: result.rows,
  };
  return responseObject;
}

//DELETE function
export async function deleteDrug(id) {
  let result = await pool.query(
    `DELETE FROM drugs WHERE id = $1 RETURNING *;`,
    [id]
  );
  let responseObject = {
    success: true,
    message: "You've removed a drug, sad face!",
    payload: result.rows,
  };
  return responseObject;
}

//PUT function
export async function replaceDrug(id, body) {
  let result = await pool.query(
    `UPDATE drugs
    SET drug_name = $1,
        brand_name = $2,
        cat_number = $3,
        company = $4,
        dose_cost = $5
    WHERE id = $6
    RETURNING *;`,
    [
      body.drug_name,
      body.brand_name,
      body.cat_number,
      body.company,
      body.dose_cost,
      id,
    ]
  );
  let responseObject = {
    success: true,
    message: "You've replaced a drug, radical!",
    payload: result.rows,
  };
  return responseObject;
}

//PATCH function
export async function updateDrug(id, body) {
  const { drug_name, brand_name, cat_number, company, dose_cost } = body;
  if (drug_name) {
      await pool.query (`UPDATE drugs
      SET drug_name = $1
      WHERE id = $2;`,
    [drug_name, id]
    );
  } 
  if (brand_name) {
    await pool.query (`UPDATE drugs
    SET brand_name = $1
    WHERE id = $2;`,
  [brand_name, id]
  );
  } 
  if (cat_number) {
    await pool.query (`UPDATE drugs
    SET cat_number = $1
    WHERE id = $2;`,
  [cat_number, id]
  );
  } 
  if (company) {
    await pool.query (`UPDATE drugs
    SET company = $1
    WHERE id = $2;`,
  [company, id]
  );
  } 
  if (dose_cost) {
    await pool.query (`UPDATE drugs
    SET dose_cost = $1
    WHERE id = $2;`,
  [dose_cost, id]
  );
  }
  const result = await pool.query(`SELECT * FROM drugs WHERE id = $1;`, [id])
  let responseObject = {
    success: true,
    message: "You've updated a drug, you naughty person!",
    payload: result.rows,
  };
  return responseObject;
}
